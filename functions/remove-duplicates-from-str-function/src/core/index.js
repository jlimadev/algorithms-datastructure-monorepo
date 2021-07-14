const removeDuplicatesWithObject = (str) => {
  const object = {};

  str.split('').forEach((char) => {
    object[char] = object[char] + 1 || 1;
  });

  return Object.keys(object).join('');
};

const removeDuplicatesWithSet = (str) => {
  const set = new Set(str); // returns an object
  const arrayFromSet = Array.from(set); // creates an array
  return arrayFromSet.join(''); // returns a string
};

module.exports = {
  removeDuplicatesWithObject,
  removeDuplicatesWithSet,
};
