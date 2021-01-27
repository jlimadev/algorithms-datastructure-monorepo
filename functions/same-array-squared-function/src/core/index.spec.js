const sameArraySquared = require('./index');

const makeSut = () => {
  const sut = sameArraySquared;
  const firstArray = [1, 2, 3];
  const secondArray = [1, 9, 4];

  return { sut, firstArray, secondArray };
};

describe('sameArraySquared', () => {
  it('Should return false with empty arrays', () => {
    const { sut } = makeSut();
    expect(sut([], [])).toBe(false);
  });

  it('Should return false if the arrays has different lengths', () => {
    const { sut, firstArray } = makeSut();
    const invalidArray = [1, 2];
    expect(sut(firstArray, invalidArray)).toBe(false);
  });

  it('Should return false if the second array is not squared', () => {
    const { sut, firstArray } = makeSut();
    const invalidArray = [1, 1, 9];
    expect(sut(firstArray, invalidArray)).toBe(false);
  });

  it('Should return true if the second array is squared of the first', () => {
    const { sut, firstArray, secondArray } = makeSut();
    expect(sut(firstArray, secondArray)).toBe(true);
  });
});
