const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(arguments.length)) {
    return 'Unable to determine the time of year!'
  }
   else if (!(Object.prototype.toString.call(date) === '[object Date]') || !(date instanceof Date) || !(Object.getOwnPropertyNames((date)).length == 0)) {
     throw new Error("Invalid date!");
    }
  let month = date.getMonth();
   let seasons = {
     winter: [0, 1, 11],
     spring: [2, 3, 4],
     summer: [5, 6, 7],
     autumn: [8, 9, 10]
 }
   for (let el in seasons) {
     if (seasons[el].includes(month)) {
       return el;
     }
   }
  }

module.exports = {
  getSeason
};
