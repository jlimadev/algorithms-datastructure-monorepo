const fizzbuzz = (input) => {
  if (input === 0) {
    return input;
  }

  let returnValue = '';

  if (input % 3 === 0) {
    returnValue += 'fizz';
  }

  if (input % 5 === 0) {
    returnValue += 'buzz';
  }

  if (!returnValue) {
    returnValue = input;
  }

  return returnValue;
};

module.exports = fizzbuzz;
