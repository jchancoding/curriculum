/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (num, counter=2) => {
  //checks for divisors up to half of num
  if (counter > num/2) {
    return console.log("num is prime")
  }

  //if check to add to sum if counter number is a divisor, if divisor then number is not prime
  if (num % counter === 0) {
    return console.log("num is not prime")
  } 

  //increment counter and run again
  counter += 1;
  return solution(num, counter);
};

solution(18);

module.exports = {
  solution,
};
