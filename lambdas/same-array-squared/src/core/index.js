const sameArraySquared = (firstArray, secondArray) => {
  if (firstArray.length === 0 || secondArray.length === 0) {
    return false;
  }

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const firstFrequencyCounter = {};
  const secondFrequencyCounter = {};

  firstArray.forEach((array) => {
    firstFrequencyCounter[array] = (firstFrequencyCounter[array] || 0) + 1;
  });

  secondArray.forEach((array) => {
    secondFrequencyCounter[array] = (secondFrequencyCounter[array] || 0) + 1;
  });

  return Object.entries(firstFrequencyCounter).every((entry) => {
    const key = entry[0];
    return (
      key ** 2 in secondFrequencyCounter
      && secondFrequencyCounter[key ** 2] === firstFrequencyCounter[key]
    );
  });
};

module.exports = sameArraySquared;
