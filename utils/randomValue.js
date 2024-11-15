/**
 * Returns a random value from the given input.
 *
 * The input can be either an array or an object with "min" and "max" properties.
 * If the input is an array, a random element is selected from the array.
 * If the input is an object, a random number between the "min" and "max" values is returned.
 *
 * @param {Array|Object} input The input to generate a random value from.
 * @returns {any} The randomly generated value.
 * @throws {Error} If the input is not valid.
 */
export default function randomValue(input) {
  const inputType = validateInput(input);

  switch (inputType) {
    case "array":
      const randomIndex = Math.floor(Math.random() * input.length);
      return input[randomIndex];

    case "range":
      const { min, max } = input;
      return Math.floor(Math.random() * (max - min + 1)) + min;

    default:
      throw new Error("Unexpected input type.");
  }
}

function validateInput(input) {
  if (Array.isArray(input)) {
    return "array";
  }

  if (
    typeof input === "object" &&
    input !== null &&
    "min" in input &&
    "max" in input
  ) {
    return "range";
  }

  throw new Error(
    "Invalid argument type. Expecting either an array or an object (with min and max properties).",
  );
}
