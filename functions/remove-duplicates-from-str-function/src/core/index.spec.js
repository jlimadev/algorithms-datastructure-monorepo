const {
  removeDuplicatesWithObject,
  removeDuplicatesWithSet,
  removeDuplicatesWithFilter,
} = require('./index');

const makeSut = () => {
  const anyStr = 'duupppliiicaaateees';
  const sutObject = removeDuplicatesWithObject;
  const sutSet = removeDuplicatesWithSet;
  const sutFilter = removeDuplicatesWithFilter;

  return {
    sutObject,
    sutSet,
    sutFilter,
    anyStr,
  };
};

describe('removeDuplicates', () => {
  it('should return an string', () => {
    const { sutObject, anyStr } = makeSut();
    expect(sutObject(anyStr)).toEqual(expect.any(String));
  });

  it('should return a normal string without duplicates values', () => {
    const { sutObject, anyStr } = makeSut();
    const expectedResult = 'duplicates';
    expect(sutObject(anyStr)).toBe(expectedResult);
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

describe('removeDuplicatesWithFilter', () => {
  it('should return a normal string without duplicates values', () => {
    const { sutFilter, anyStr } = makeSut();
    const expectedResult = 'duplicates';
    expect(sutFilter(anyStr)).toBe(expectedResult);
  });
});
