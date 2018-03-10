const isPrime = require('../js1/7.js').solution;
/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const solution = (a, idx = 0) => {
  if (idx == a.length) {
    return a;
  }
  if (isPrime(a[idx]) == false) {
    a[idx] = 1;
  }
  return solution(a, idx + 1);
};

module.exports = {
  solution,
};
