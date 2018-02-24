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
  if (primeCheck(a[idx]) == false) {
    a[idx] = 1;
  }
  return solution(a, idx + 1);
};

const primeCheck = (num, counter=2) => {
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
  return primeCheck(num, counter+1);
};

module.exports = {
  solution,
};
