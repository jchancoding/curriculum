/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a, idx = 0, b = []) => {
  if (idx === a.length) {
    return b;
  }
  if (a[idx] > 5) {
    b.push(a[idx]);
  }
  return solution(a, idx + 1, b);
};

module.exports = {
  solution,
};
