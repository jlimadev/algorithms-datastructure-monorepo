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

const removeDuplicatesWithFilter = (str) => {
  const arrayFromStr = Array.from(str);
  return arrayFromStr
    .filter((it, index, self) => self.indexOf(it) === index)
    .join('');
};

module.exports = {
  removeDuplicatesWithObject,
  removeDuplicatesWithSet,
  removeDuplicatesWithFilter,
};
