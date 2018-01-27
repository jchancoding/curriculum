/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (x, string = "") => {
    if (0 < x) {
        x -= 1;
        string += string;
        return solution(x, string);
    } else {
        return console.log(string);
    }
  }

  solution(5, testword);

module.exports = {
  solution,
};
