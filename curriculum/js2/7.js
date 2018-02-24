/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b, idx = 0, result = 0) => {
  if (idx == a.length) {
    return result;
  }
  if (a[idx] == b) {
    result += 1;
  }
  return solution(a, b, idx + 1, result);
};

module.exports = {
  solution,
};
