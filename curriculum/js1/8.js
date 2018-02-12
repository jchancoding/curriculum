/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, counter = 1, GCD = 1) => {
  //stops once counter reaches the lesser of a and b
  if (counter > a || counter > b) {
    return GCD
  } 
  //if a & b share a divisor it is the new GCD
  if (a % counter === 0 && b % counter === 0) {
    GCD = counter;
  }
  //increment and run again
  return solution(a, b, counter+1, GCD);
};

module.exports = {
  solution,
};
