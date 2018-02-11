/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (num, counter = num) => {
  //early elimination if num is a multiple of 7
  if (num % 7 === 0 && counter == num) {
    num += 7;
    return num
  }

  //incrementally checks if counter is divisible by 7
  if (counter % 7 === 0) {
    return counter;
  }

  return solution(num, counter+1);
};

module.exports = {
  solution,
};
