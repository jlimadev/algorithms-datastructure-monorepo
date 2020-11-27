const countChar = require('./index');

describe('countChar', () => {
  const makeSut = () => {
    const inputString = 'Any value 123';
    const sut = countChar;

    return { inputString, sut };
  };

  it('should return an object with the values', () => {
    const { sut, inputString } = makeSut();
    expect(sut(inputString)).toBeInstanceOf(Object);
  });

  it('should add one more count to keys that already exists', () => {
    const { sut, inputString } = makeSut();
    const expected = { a: 2 };
    expect(sut(inputString)).toMatchObject(expected);
  });

  it('should not have any uppercase values', () => {
    const { sut, inputString } = makeSut();
    const expected = { A: 1 };
    expect(sut(inputString)).not.toMatchObject(expected);
  });

  it('should not have spaces', () => {
    const { sut, inputString } = makeSut();
    const expected = { ' ': 1 };
    expect(sut(inputString)).not.toMatchObject(expected);
  });
});
