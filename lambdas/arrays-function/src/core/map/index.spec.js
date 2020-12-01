const mapFunction = require('./index');

describe('mapFunction', () => {
  const makeSut = () => {
    const anyArray = [1, 2, 3, 4, 'j'];
    const sut = mapFunction;

    return { sut, anyArray };
  };

  it('should return an object with the values', () => {
    const { sut, anyArray } = makeSut();
    expect(sut(anyArray)).toBeInstanceOf(Object);
  });

  it('should return an object with filtered values', () => {
    const { sut, anyArray } = makeSut();
    const expected = [2, 4, 6, 8, NaN];
    expect(sut(anyArray)).toEqual(expected);
  });
});
