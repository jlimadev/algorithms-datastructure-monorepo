const { getUser, getPhone, getAddress } = require('./asyncFunctions');

describe('getUser', () => {
  it('Should return a user', async () => {
    const user = getUser('Any name').then((resolved) => {
      expect(resolved).toEqual({
        id: 1,
        name: 'Any name',
        age: 600,
      });
    });
    jest.runAllTimers();
    return user;
  });

  it('Should return an error when name is not informed', async () => {
    await expect(getUser()).rejects.toThrow('You must inform the name');
  });
});

describe('getPhone', () => {
  it('Should return a phone', async () => {
    const phone = getPhone(1).then((resolved) => {
      expect(resolved).toEqual({
        userId: 1,
        ddd: 11,
        phone: 40028922,
      });
    });
    jest.runAllTimers();
    return phone;
  });

  it('Should return an error when userId is not informed', async () => {
    await expect(getPhone()).rejects.toThrow('No userId found');
  });
});

describe('getAddress', () => {
  it('Should return an address', async () => {
    const address = getAddress(1).then((resolved) => {
      expect(resolved).toEqual({
        userId: 1,
        street: 'Groove Street',
        number: 100,
      });
    });
    jest.runAllTimers();
    return address;
  });

  it('Should return an error when userId is not informed', async () => {
    await expect(getAddress()).rejects.toThrow('No userId found');
  });
});
