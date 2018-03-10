/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a, idx = 0, sum = 0) => {
  if (a.length == 0) {
    return (-1);
  }
  if (idx == a.length) {
    return sum;
  }
  return solution(a, idx + 1, sum + a[idx]);
};

module.exports = {
  solution,
};
