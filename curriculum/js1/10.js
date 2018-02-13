/**
 * 2 Timeouts: takes in 2 numbers (a,b) and a function,
 *     execute the function after a seconds,
 *     and then execute the function again after b seconds
 * @param {number} a
 * @param {number} b
 * @param {function} c
 */

const solution = (a, b, funct) => {
  timeA = a * 1000;
  timeB = (a+b) * 1000;
  setTimeout(funct, timeA);
  setTimeout(funct, timeB);
};

module.exports = {
  solution,
};

