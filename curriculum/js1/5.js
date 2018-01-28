/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */
const samplefunct = () => {
  console.log("running samplefunct");
}

const solution = (x, funct) => {
  if (0 < x) {
    x -= 1;
    samplefunct();
    return solution (x, funct)
  } else if (x == 0) {
    return console.log("done running");
  }
};

solution(7, samplefunct());


module.exports = {
  solution,
};
