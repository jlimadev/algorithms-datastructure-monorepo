const countChar = require('./index');

describe('countChar', () => {
  it('should return an object with the values', () => {
    const inputString = 'Any string 1234';
    expect(countChar(inputString)).toBeInstanceOf(Object);
  });

  it('should add one more count to keys that already exists', () => {
    const inputString = 'aaa';
    const expected = { a: 3 };
    expect(JSON.stringify(countChar(inputString))).toBe(
      JSON.stringify(expected)
    );
  });

  it('should not have any uppercase values', () => {
    const inputString = 'ANY any';
    const expected = { a: 2, n: 2, y: 2 };
    expect(JSON.stringify(countChar(inputString))).toBe(
      JSON.stringify(expected)
    );
  });

  it('should not have spaces', () => {
    const inputString = 'ANY any';
    const expected = { ' ': 1 };
    expect(JSON.stringify(countChar(inputString))).not.toContain(
      JSON.stringify(expected)
    );
  });
});
