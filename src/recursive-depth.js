const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  // calculateDepth(arr) {
  //   let count = 1;
  //   let result = 0;
  //   let max = 0;
  //   for (let el of arr) {
  //     if (Array.isArray(el)) {
  //       let n = Math.max(0, this.calculateDepth(el));
  //       if (n > max) {
  //         max = n;
  //       }
  //       result = Math.max(this.calculateDepth(el), max);
  //     }
  //   }
  //   return count + result;
  // }
}
}


module.exports = {
  DepthCalculator,
};
