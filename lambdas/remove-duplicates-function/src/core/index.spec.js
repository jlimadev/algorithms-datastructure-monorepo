const removeDuplicates = require('./index');

describe('removeDuplicates', () => {
  const makeSut = () => {
    const anyStr = 'duupppliiicaaateees';
    const sut = removeDuplicates;

    return { sut, anyStr };
  };

  it('should return an string', () => {
    const { sut, anyStr } = makeSut();
    expect(sut(anyStr)).toEqual(expect.any(String));
  });

  it('should return a normal string without duplicates values', () => {
    const { sut, anyStr } = makeSut();
    const expectedResult = 'duplicates';
    expect(sut(anyStr)).toBe(expectedResult);
  });
});
