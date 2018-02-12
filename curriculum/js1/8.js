/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, counter = 1, gcd = 1) => {
  //stops once counter reaches the lesser of a and b
  if (counter > a || counter > b) {
    return gcd
  } 
  //if a & b share a divisor it is the new GCD
  if (a % counter === 0 && b % counter === 0) {
    gcd = counter;
  }
  //increment and run again
  return solution(a, b, counter+1, gcd);
};

module.exports = {
  solution,
};
