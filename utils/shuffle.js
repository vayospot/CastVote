/**
 * Shuffles the elements of an array and returns a new shuffled array.
 *
 * This function uses the Fisher-Yates shuffle algorithm.
 *
 * @param {Array} array The array to shuffle.
 * @returns {Array} A new array with the elements shuffled.
 * @throws {TypeError} Throws an error if the input is not an array.
 */
export default function shuffle(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Input must be an array.");
  }

  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
