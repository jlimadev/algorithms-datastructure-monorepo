/**
 *  This function must return only lowercase chars and numbers
 *  Uppercase must be counted as lower
 *  spaces and special characters must be ignored
 */

const countChar = (inputString) => {
  const object = {};
  const inputArray = inputString.split('');
  const isAlphaNumeric = (char) => /[a-zA-Z0-9]/.test(char);

  inputArray.forEach((input) => {
    let char = input;
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      object[char] = object[char] + 1 || 1;
    }
  });

  return object;
};

module.exports = countChar;
