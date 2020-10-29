const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false
  } else {
 let firstLetArr = members.map(function(name) {
    if(typeof name === 'string' || name instanceof String) {
      name = name.replace(/\s/g, '')
      return name.slice(0, 1)
   } else {
   	return null;
   }
  });
  let array2 = firstLetArr.filter(element => element !== null);
  
  return array2.join('').toUpperCase().split('').sort().join('')
}
}