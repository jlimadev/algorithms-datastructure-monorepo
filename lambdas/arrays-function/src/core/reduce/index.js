const reduceFunction = (array) => {
  const isNumber = (value) => typeof value === 'number';
  /**
   * @param prev previousValue is the initial value of the array, we can pass one default value
   * @param current si the current value in the iteration
   * @param index is the current index in the iteration
   * @param array is the complete array if need to use it
   */
  const reduce = (prev, current, index) => {
    let result = prev;
    if (isNumber(current)) {
      result = prev * current + index;
    }
    return result;
  };
  return array.reduce(reduce, 0);
};

module.exports = reduceFunction;
