/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x) => {
  // return 0;
  var str = "";
  for (i = 0; i <= x; i++) {
    str += "hello";
  }
  return str;
};


//alternate solution with recursion
solution2 = (x, string = "") => {
  if (0 < x) {
      x -= 1;
      string += "hello";
      return solution(x, string);
  } else {
      return console.log(string);
  }
  }

  solution(5);

module.exports = {
  solution,
};
