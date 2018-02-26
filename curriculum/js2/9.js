/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function (callback, idx = 0, accumulator = 0) {
    if (typeof idx != "number") {
      return false;
    }
    if (idx == this.length) {
      return accumulator;
    }
    if (typeof accumulator == "number") {
      accumulator += callback(this[idx]);
    }
    console.log(Array.isArray(accumulator));
    if (Array.isArray(accumulator) == true) {
      accumulator.push(callback(this[idx]));
    }
    if (typeof accumulator == "object") {
      accumulator[idx] = callback(this[idx]);
    }

    return this.gsReduce(callback, idx + 1, accumulator);
  }     
}

solution();
  
var myarr = [1,2,3,4,5];
console.log(myarr.gsReduce(function callback(element){return 2*element;}, 0, {}));

module.exports = {
  solution,
};
