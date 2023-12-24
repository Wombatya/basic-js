const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {
   throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  let resultArr = arr.concat([]);
  if (resultArr[arr.length-1] == '--discard-next' || resultArr[arr.length-1] == '--double-next') {
resultArr.splice(-1, 1);
  }
  if (resultArr[0] == '--discard-prev' || resultArr[0] == '--double-prev') {
    resultArr.splice(0, 1);
  }
   if (resultArr.includes('--discard-next') && resultArr.includes('--double-prev') || resultArr.includes('--discard-next') && resultArr.includes('--discard-prev') ) {
  let pos = resultArr.indexOf('--discard-next')
  if (resultArr.indexOf('--double-prev') == pos+2) {
    resultArr.splice(pos, 3);
  }
    if (resultArr.indexOf('--discard-prev') == pos+2) {
    resultArr.splice(pos, 3);  
   } 
}
  if (resultArr.includes('--discard-next')) {
    let pos = resultArr.indexOf('--discard-next');
    resultArr.splice(pos, 2);
  }
  if (resultArr.includes('--double-next')) {
    let pos = resultArr.indexOf('--double-next');
     resultArr.splice(pos, 1, resultArr[pos+1]);
   }
  if (resultArr.includes('--discard-prev')) {
  let pos = resultArr.indexOf('--discard-prev');
  resultArr = resultArr.slice(0, pos - 1).concat(resultArr.slice(pos + 1));
  }
  if (resultArr.includes('--double-prev')) {
  let pos = resultArr.indexOf('--double-prev');
  resultArr = resultArr.slice(0, pos).concat(resultArr[pos - 1]).concat(resultArr.slice(pos + 1));
  }
  return resultArr;
}

module.exports = {
  transform
};
