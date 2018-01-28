/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (num, counter = num) => {
  //early elimination if num is a multiple of 7
  if (num % 7 === 0 && counter == num) {
    num += 7;
    return console.log("Next num divisible by 7 is: "+num)
  }

  //incrementally checks if counter is divisible by 7
  if (counter % 7 === 0) {
    return console.log("Next num divisible by 7 is: "+counter);
  }

  counter++;
  return solution(num, counter);
};

solution (12);

module.exports = {
  solution,
};
