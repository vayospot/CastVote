/**
 * Converts a timestamp into a JavaScript Date object and provides formatted
 * date and time properties and methods for further manipulation.
 *
 * @param {number|object|Date} timestamp - The timestamp to convert, which can be:
 *                                         - A number in milliseconds since epoch,
 *                                         - An object with `seconds` and `nanoseconds` properties,
 *                                         - A Date object.
 * @returns {object} An object with formatted date properties and utility methods.
 * @throws Will throw an error if the timestamp format is invalid.
 */
export default function formatTimestamp(timestamp) {
  const date = convertToDate(timestamp);

  const properties = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds(),
    timestamp: date.getTime(),
    time: date.toLocaleString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    date: date.toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    dateTime: date.toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  };

  const methods = {
    /**
     * Calculates the time remaining from the current date to the provided date.
     *
     * @returns {object} An object containing the days, hours, minutes, and seconds left.
     */
    timeLeft: () => {
      const diff = date.getTime() - Date.now();

      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      return { days, hours, minutes, seconds };
    },

    /**
     * Formats the date using the provided options.
     *
     * @param {object} options - An object that defines the date and time format options
     *                           (following the format options used by `toLocaleString`).
     * @returns {string} The formatted date string.
     */
    format: (options) => date.toLocaleString("en-GB", options),
  };

  return { ...properties, ...methods };
}

function convertToDate(timestamp) {
  if (typeof timestamp === "number") {
    return new Date(timestamp);
  }

  if (
    typeof timestamp.seconds === "number" ||
    typeof timestamp.nanoseconds === "number"
  ) {
    return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
  }

  if (timestamp instanceof Date) {
    return timestamp;
  }

  throw new Error("Invalid timestamp format");
}
