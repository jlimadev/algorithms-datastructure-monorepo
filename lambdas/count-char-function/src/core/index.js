/**
 *  This function must return only lowercase chars and numbers
 *  Uppercase must be counted as lower
 *  spaces and special characters must be ignored
 */

const countChar = (inputString) => {
  const object = {};
  const inputArray = inputString.split('');
  const isAlphaNumeric = (char) => /[a-z0-9]/.test(char);

  inputArray.forEach((input) => {
    const char = input.toLowerCase();

    if (isAlphaNumeric(char)) {
      if (object[char] > 0) {
        object[char] += 1;
      } else {
        object[char] = 1;
      }
    }
  });

  return object;
};

module.exports = countChar;
