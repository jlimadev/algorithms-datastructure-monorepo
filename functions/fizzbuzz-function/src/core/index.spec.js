const fn = require('./index');
const spy = jest.spyOn(fn, 'fizzbuzz');

describe('FizzBuzz function test', () => {
  beforeEach(() => {
    spy.mockClear();
  });

  it('Should return the input number if is not multiple of 3 or 5', () => {
    const inputNumber = 2;
    const result = fn.fizzbuzz(inputNumber);
    expect(result).toBe(inputNumber);
    expect(spy).toHaveBeenCalledWith(inputNumber);
  });
  it('Should return the input number if is not multiple of 3 or 5, zero case', () => {
    const inputNumber = 0;
    const result = fn.fizzbuzz(inputNumber);
    expect(result).toBe(inputNumber);
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('Should return fizz if input number is multiple of 3', () => {
    const inputNumber = 3;
    const result = fn.fizzbuzz(inputNumber);
    expect(result).toBe('fizz');
    expect(spy).toHaveBeenCalledWith(inputNumber);
  });
  it('Should return buzz if input number is multiple of 5', () => {
    const inputNumber = 5;
    const result = fn.fizzbuzz(inputNumber);
    expect(result).toBe('buzz');
    expect(spy).toHaveBeenCalledWith(inputNumber);
  });
  it('Should return fizzbuzz if input number is multiple of 3 and 5', () => {
    const inputNumber = 15;
    const result = fn.fizzbuzz(inputNumber);
    expect(result).toBe('fizzbuzz');
    expect(spy).toHaveBeenCalledWith(inputNumber);
  });
});
