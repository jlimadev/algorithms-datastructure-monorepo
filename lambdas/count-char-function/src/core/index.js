const countChar = (inputString) => {
  const object = {};
  const inputArray = inputString.split('').filter((input) => input !== ' ');

  inputArray.forEach((input) => {
    const char = input.toLowerCase();

    if (object[char] > 0) object[char] += 1;
    else object[char] = 1;
  });

  return object;
};

module.exports = countChar;
