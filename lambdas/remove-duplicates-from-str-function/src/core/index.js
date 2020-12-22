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

const removeDuplicatesWithSet = (str) => {
  const set = new Set(str); // returns an object
  const arrayFromSet = Array.from(set); // creates an array
  return arrayFromSet.join(''); // returns a string
};

module.exports = { removeDuplicates, removeDuplicatesWithSet };
