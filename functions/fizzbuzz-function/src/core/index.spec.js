const fizzbuzz = require('./index');

describe('FizzBuzz function test', () => {
  it('Should return the input number if is not multiple of 3 or 5', () => {
    const anyNumber = 2;
    const expected = fizzbuzz(anyNumber);
    expect(expected).toBe(anyNumber);
  });

  it('Should return the input number if is not multiple of 3 or 5, zero case', () => {
    const anyNumber = 0;
    const expected = fizzbuzz(anyNumber);
    expect(expected).toBe(anyNumber);
  });

  it('Should return fizz if input number is multiple of 3', () => {
    const anyNumber = 3;
    const expected = fizzbuzz(anyNumber);
    expect(expected).toBe('fizz');
  });

  it('Should return buzz if input number is multiple of 5', () => {
    const anyNumber = 5;
    const expected = fizzbuzz(anyNumber);
    expect(expected).toBe('buzz');
  });

  it('Should return fizzbuzz if input number is multiple of 3 and 5', () => {
    const anyNumber = 15;
    const expected = fizzbuzz(anyNumber);
    expect(expected).toBe('fizzbuzz');
  });
});
