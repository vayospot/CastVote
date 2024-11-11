/**
 * Abbreviates a number to the nearest thousand, million or billion.
 * Examples:
 *   1000 -> 1k
 *   10000 -> 10k
 *   1000000 -> 1m
 *   1000000000 -> 1b
 * @param {number} num - The number to abbreviate
 * @returns {string} The abbreviated number
 */
export default function abbreviateNumber(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "b"; // 1 billion
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "m"; // 1 million
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k"; // 1 thousand
  }

  return num.toString(); // Less than 1 thousand
}
