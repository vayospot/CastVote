/**
 * Abbreviates a number to K (thousands), M (millions), or B (billions)
 * @param {number} number - The number to abbreviate
 * @param {number} [decimals=1] - Number of decimal places (default: 1)
 * @returns {string} Abbreviated number (e.g., "1.2k", "1.5m", "2.3b")
 * @throws {TypeError} If input is not a finite number
 */
export default function abbreviateNumber(number, decimals = 1) {
  // Input validation
  if (!Number.isFinite(number)) {
    throw new TypeError("Input must be a finite number");
  }

  // Handle negative numbers
  const isNegative = number < 0;
  const absNumber = Math.abs(number);

  // Define thresholds and their suffixes
  const abbreviations = [
    { threshold: 1e9, suffix: "b" }, // billions
    { threshold: 1e6, suffix: "m" }, // millions
    { threshold: 1e3, suffix: "k" }, // thousands
  ];

  // Find the appropriate abbreviation
  const abbreviation = abbreviations.find(
    ({ threshold }) => absNumber >= threshold,
  );

  // If no abbreviation is needed, return original number
  if (!abbreviation) {
    return isNegative ? `-${absNumber}` : absNumber.toString();
  }

  // Calculate abbreviated value
  const value = absNumber / abbreviation.threshold;
  const factor = Math.pow(10, decimals);
  const truncated = Math.floor(value * factor) / factor;

  // Format the number
  const formatted = truncated.toFixed(decimals).replace(/\.0+$/, "");

  return `${isNegative ? "-" : ""}${formatted}${abbreviation.suffix}`;
}
