const filterFunction = require('./index');

describe('filterFunction', () => {
  const makeSut = () => {
    const anyArray = [1, 2, 3, 4, 'j'];
    const sut = filterFunction;

    return { sut, anyArray };
  };

  it('should return an object with the values', () => {
    const { sut, anyArray } = makeSut();
    expect(sut(anyArray)).toBeInstanceOf(Object);
  });

  it('should return an object with filtered values', () => {
    const { sut, anyArray } = makeSut();
    const expected = [2, 3, 4];
    expect(sut(anyArray)).toEqual(expected);
  });
});
