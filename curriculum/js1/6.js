/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (num, counter = 2, sum = 0) => {
  //if counter reaches half of the number, return sum (this eliminates duplicate divisors to the sum)
  if (counter > num/2) {
    return console.log(sum);
  }

  //if check to add to sum if counter number is a divisor
  if (num % counter === 0) {
    sum += counter;
  } 

  //increment counter and run again
  counter += 1;
  return solution(num, counter, sum);
};

solution(10);

module.exports = {
  solution,
};
