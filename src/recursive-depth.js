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
  calculateDepth(arr) {
    let result = 1;
    for (let el of arr) {
      if (Array.isArray(el)) {
       let curDepth = this.calculateDepth(el) + 1;
        result = Math.max(result, curDepth);
      }
    }
    return result;
}
}


module.exports = {
  DepthCalculator,
};
