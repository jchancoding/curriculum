/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, counter = 1, GCD = 1) => {
  //stops once counter reaches the lesser of a and b
  if (b > a && counter > a) {
    return console.log("GCD is: "+GCD);
  } else if (a > b && counter > b) {
    return console.log("GCD is: "+GCD);
  }

  //if a & b share a divisor it is the new GCD
  if (a % counter === 0 && b % counter === 0) {
    GCD = counter;
  }
  
  //increment and run again
  counter++;
  return solution(a, b, counter, GCD);
};

solution(150, 50);

module.exports = {
  solution,
};
