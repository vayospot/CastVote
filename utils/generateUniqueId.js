// Added detailed comments for clarity on the code's functionality

/**
 * @fileoverview
 * This module provides functionality to generate and validate unique identifiers.
 * The IDs are created using a combination of timestamp, random numbers, and custom encoding
 * to ensure uniqueness and consistency across different systems.
 */

/**
 * Valid characters used in the ID generation.
 * This includes numbers and letters, excluding similar-looking characters (like 0, O, 1, I) to avoid confusion.
 */
const ALPHABET = "23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz";
const ALPHABET_LENGTH = ALPHABET.length; // Number of characters in our alphabet

// Create a buffer to hold random bytes. We use a size of 16 bytes.
const randomBytesBuffer = new Uint8Array(16);

// Create a DataView to manipulate the random bytes buffer as a set of different numeric types.
const dataView = new DataView(randomBytesBuffer.buffer);

// Array to hold shuffled characters during the shuffle process.
const shuffleArray = new Array(12);

/**
 * Reference to the crypto API for secure random number generation.
 * Falls back to null if crypto is not available in the environment.
 */
const cryptoRef = typeof crypto !== "undefined" ? crypto : null;

/**
 * Generates cryptographically secure random bytes if possible,
 * falls back to Math.random() if crypto API is not available.
 *
 * @returns {Uint8Array} A buffer containing 16 random bytes
 */
const getRandomBytes = () => {
  if (cryptoRef) {
    // Use secure random number generation if available
    cryptoRef.getRandomValues(randomBytesBuffer);
    return randomBytesBuffer;
  }
  // Fallback to Math.random() if crypto API is not available
  for (let i = 0; i < 16; i++) {
    randomBytesBuffer[i] = Math.floor(Math.random() * 256); // Generate random bytes (0-255)
  }
  return randomBytesBuffer;
};

/**
 * Converts a number to a string using the custom alphabet.
 * This is similar to converting a number to a different base,
 * but using our custom alphabet instead of standard digits.
 *
 * @param {number} num - The number to convert
 * @param {number} length - The desired length of the result string
 * @returns {string} The string representation of the number in the custom alphabet
 */
const numberToString = (num, length) => {
  const result = new Array(length); // Prepare an array to hold the characters of the result
  let idx = length - 1; // Start filling from the end of the array.
  let n = BigInt(num); // Convert to BigInt for handling large numbers
  const base = BigInt(ALPHABET_LENGTH); // Base is the length of our custom alphabet.

  // Convert number to custom alphabet representation
  while (idx >= 0 && n > 0n) {
    result[idx] = ALPHABET[Number(n % base)]; // Get the character from the custom alphabet
    n = n / base; // Divide the number by the base to reduce it for the next iteration.
    idx--; // Move the index to the next position
  }

  // Fill remaining positions with random characters from the alphabet.
  while (idx >= 0) {
    result[idx] = ALPHABET[randomBytesBuffer[idx] % ALPHABET_LENGTH];
    idx--;
  }

  return result.join(""); // Join the array into a string and return.
};

/**
 * Shuffles a string based on a seed value using the Fisher-Yates shuffle algorithm.
 * The seed ensures the shuffle is consistent for the same input.
 *
 * @param {string} str - The string to shuffle
 * @param {number} seed - The seed value to base the shuffle on
 * @returns {string} The shuffled string
 */
const shuffleString = (str, seed) => {
  const len = str.length; // Length of the string

  // Copy the string into the shuffle array.
  for (let i = 0; i < len; i++) shuffleArray[i] = str[i];

  // Fisher-Yates shuffle algorithm to shuffle the array.
  for (let i = len - 1; i > 0; i--) {
    const j = Math.floor((seed * (i + 1)) % (i + 1)); // Generate a random index

    // Swap elements
    [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
  }

  // Join the array into a string and return
  return shuffleArray.slice(0, len).join("");
};

/**
 * Set to track the last timestamps used for unique ID generation.
 * This prevents duplicate IDs if generated in quick succession.
 */
const lastTimestamps = new Set();
const TIMESTAMP_MEMORY = 1000; // The maximum number of timestamps to remember.

/**
 * Function to generate a unique ID.
 *
 * The ID is composed of three parts:
 * 1. Encoded timestamp (8 chars)
 * 2. Random value (12 chars)
 * 3. Additional random component (4 chars)
 *
 * @returns {string} A unique 22-character identifier
 */
const generateUniqueId = () => {
  // Get current timestamp with microsecond precision
  let timestamp = performance.now();

  // Create a random offset based on the first random byte.
  const randomOffset = (randomBytesBuffer[0] / 256) * 1000;

  // Adjust the timestamp with the random offset.
  timestamp += randomOffset;

  // Ensure timestamp is unique by slightly increasing it if it's a duplicate.
  while (lastTimestamps.has(timestamp)) {
    timestamp += 0.001; // Increase timestamp by 1ms
  }

  // Maintain the memory of timestamps, removing the oldest if at capacity.
  if (lastTimestamps.size >= TIMESTAMP_MEMORY) {
    lastTimestamps.delete(lastTimestamps.values().next().value);
  }
  lastTimestamps.add(timestamp);

  // Convert timestamp to BigInt for precision.
  const timestampInt = BigInt(Math.floor(timestamp * 1000));

  // Fill the random bytes buffer with new random bytes.
  getRandomBytes();

  // Retrieve two 64-bit unsigned integers from the random bytes.
  const randomInt1 = dataView.getBigUint64(0, true); // Read the first 8 bytes.
  const randomInt2 = dataView.getBigUint64(8, true); // Read the next 8 bytes.

  // Generate a seed for shuffling based on the two random integers.
  const seed = Number(randomInt1) ^ Number(randomInt2);

  // Generate three parts of the ID using shuffled string representations.
  const parts = [
    // Part 1: Encoded timestamp (8 chars)
    shuffleString(numberToString(Number(timestampInt), 8), seed),

    // Part 2: Random value (12 chars)
    shuffleString(
      numberToString(
        Number(randomInt1 ^ (randomInt2 & BigInt(Number.MAX_SAFE_INTEGER))),
        12,
      ),
      seed + 1, // Use a different seed for this part.
    ),

    // Part 3: Additional random component (4 chars)
    shuffleString(
      numberToString(Number(BigInt(Math.floor(Date.now() * Math.random()))), 4),
      seed + 2, // Use another different seed.
    ),
  ];

  // Join all parts to create the final unique ID
  return parts.join("");
};

/**
 * Validates if a given ID is a valid unique ID.
 *
 * @param {any} id - The ID to validate
 * @returns {boolean} True if the ID is valid, false otherwise
 */
const isValidUniqueId = (id) => {
  if (typeof id !== "string") return false; // Ensure the ID is a string

  // Define the expected length of a valid ID
  const expectedLength = 24;
  // Check if the ID has the correct length.
  if (id.length !== expectedLength) return false;

  // Check if every character in the ID is part of the defined ALPHABET.
  return [...id].every((char) => ALPHABET.includes(char));
};

// Export the functions for use in other modules.
export { generateUniqueId, isValidUniqueId };
