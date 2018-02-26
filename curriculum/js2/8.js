/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (callback, result=[]) {
    if (result.length == this.length) {
      return result;
    }
    result.push(callback(this[result.length]));
    return this.gsMap(callback, result);
  }     
}

module.exports = {
  solution,
};
