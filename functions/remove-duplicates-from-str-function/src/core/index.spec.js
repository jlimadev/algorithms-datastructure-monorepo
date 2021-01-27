const { removeDuplicates, removeDuplicatesWithSet } = require('./index');

const makeSut = () => {
  const anyStr = 'duupppliiicaaateees';
  const sut = removeDuplicates;
  const sutSet = removeDuplicatesWithSet;

  return { sut, sutSet, anyStr };
};

describe('removeDuplicates', () => {
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

describe('removeDuplicatesWithSet', () => {
  it('should return an string', () => {
    const { sutSet, anyStr } = makeSut();
    expect(sutSet(anyStr)).toEqual(expect.any(String));
  });

  it('should return a normal string without duplicates values', () => {
    const { sutSet, anyStr } = makeSut();
    const expectedResult = 'duplicates';
    expect(sutSet(anyStr)).toBe(expectedResult);
  });
});
