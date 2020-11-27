const filterFunction = (array) => {
  const filter = (arr) => arr >= 2;
  return array.filter(filter);
};

module.exports = filterFunction;
