/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

solution = (x, string = "") => {
  if (x <= 0) return string;
  if (0 < x) {
      return solution(x-1, `${string}hello`);
  }
}

module.exports = {
  solution,
};
