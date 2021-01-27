const reduceFunction = require('./index');

const makeSut = () => {
  const anyArray = [1, 2, 3, 4, 'j'];
  const sut = reduceFunction;

  return { sut, anyArray };
};

describe('reduceFunction', () => {
  it('should return an number, no matter the array', () => {
    const { sut, anyArray } = makeSut();
    expect(sut(anyArray)).toEqual(expect.any(Number));
  });

  it('should return an object with filtered values', () => {
    const { sut, anyArray } = makeSut();
    const expected = 23;
    expect(sut(anyArray)).toEqual(expected);
  });
});
