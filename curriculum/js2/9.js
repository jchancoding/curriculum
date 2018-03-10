/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function (callback, idx = 0, accumulator = 0) {
    if (typeof idx != "number") {
      return false;
    }
    if (idx === this.length) {
      return accumulator;
    }
    accumulator = callback(accumulator, this[idx]);
    return this.gsReduce(callback, idx + 1, accumulator);
  }     
}

module.exports = {
  solution,
};
