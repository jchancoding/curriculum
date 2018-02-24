/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a, idx = 0, max = '') => {
  if (idx == a.length) {
    return max;
  }
  if (idx == 0) {
    max = a[idx];
    return solution (a, idx + 1, max);
  }
  if (a[idx] > max) {
    max = a[idx];
  }
  return solution(a, idx + 1, max);
};

module.exports = {
  solution,
};
