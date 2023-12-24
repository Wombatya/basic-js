const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let devidedArr = [];
  domains.forEach((el) => {
    devidedArr.push(el.split(".").reverse());
  });
  devidedArr = devidedArr.flat();
  let newArr = devidedArr.map((el) => {
    return `.${el}`;
  });
  let indexArr = [];
  let idx = newArr.indexOf(newArr[0]);
  while (idx != -1) {
    indexArr.push(idx);
    idx = newArr.indexOf(newArr[0], idx + 1);
  }
  let resultArr = [];
  for (let i = 0; i <= indexArr.length - 1; i++) {
    let slicedArr;
    if (i != indexArr.length - 1) {
      slicedArr = newArr.slice(indexArr[i], indexArr[i + 1]);
    } else {
      slicedArr = newArr.slice(indexArr[i]);
    }
    let el = "";
    for (let j = 0; j <= slicedArr.length - 1; j++) {
      el += slicedArr[j];
      resultArr.push(el);
    }
  }
  const result = resultArr.reduce((acc, el, i) => {
    if (acc.hasOwnProperty(el)) {
      acc[el] += 1;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  return result;
}

module.exports = {
  getDNSStats,
};
