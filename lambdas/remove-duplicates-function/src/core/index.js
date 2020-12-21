const removeDuplicates = (str) => {
  const object = {};

  str.split('').forEach((char) => {
    object[char] = object[char] + 1 || 1;
  });

  let returnValue = '';
  Object.keys(object).forEach((key) => {
    returnValue += key;
  });

  return returnValue;
};

module.exports = removeDuplicates;
