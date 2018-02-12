/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (x, str, result="") => {
  if (!x) {
    return result;
  }
    return solution(x-1 , str, result+str);
}

module.exports = {
  solution,
};
