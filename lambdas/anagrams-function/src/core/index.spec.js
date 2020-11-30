const anagram = require('./index');

describe('anagram', () => {
  const makeSut = () => {
    const firstString = 'any';
    const secondString = 'nay';
    const sut = anagram;

    return { sut, firstString, secondString };
  };

  it('should return false if strings have different sizes', () => {
    const { sut, firstString } = makeSut();
    const invalidString = 'any bigger string';
    expect(sut(firstString, invalidString)).toBe(false);
  });

  it('should return true if strings are equals', () => {
    const { sut, firstString } = makeSut();
    expect(sut(firstString, firstString)).toBe(true);
  });

  it('should return true if strings are not anagrams (but have same size)', () => {
    const { sut, firstString } = makeSut();
    const invalidString = 'car';
    expect(sut(firstString, invalidString)).toBe(false);
  });

  it('should return true if strings are anagrams', () => {
    const { sut, firstString, secondString } = makeSut();
    expect(sut(firstString, secondString)).toBe(true);
  });
});
