const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let namesOnly = members.reduce((acc, el) => { 
      if (typeof el == 'string') {
        acc.push(el);
      }
      return acc;
    }, []);
    let firstLetters = namesOnly.reduce((acc, el) => {
      el = el.trim();
      el = el[0];
      el = el.toUpperCase();
      acc.push(el);
      return acc;
    }, []);
    firstLetters = firstLetters.sort().join('');
    return firstLetters;
  };
  return false;
}

module.exports = {
  createDreamTeam
};
