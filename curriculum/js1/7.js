/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (num, counter=2) => {
  if (num === 1) {
    return false;
  }
  //checks for divisors up to half of num
  if (counter > num/2) {
    return true;
  }

  //if check to add to sum if counter number is a divisor, if divisor then number is not prime
  if (num % counter === 0) {
    return false;
  } 

  //increment counter and run again
  return solution(num, counter+1);
};

module.exports = {
  solution,
};
