const asyncFunctions = require('./index');

const makeSut = () => {
  const userId = 'ffaa43ad-e7d4-4509-a7bf-686ac1ef74e4';
  const name = 'Any Name';

  const responses = {
    user: {
      id: userId,
      name,
      age: 600,
    },
    phone: {
      userId,
      ddd: 11,
      phone: 40028922,
    },
    address: {
      userId,
      street: 'Groove Street',
      number: 100,
    },
  };

  const getUser = jest.fn(() => responses.user);
  const getPhone = jest.fn(() => responses.phone);
  const getAddress = jest.fn(() => responses.address);

  const deps = {
    getUser,
    getPhone,
    getAddress,
  };

  const sut = asyncFunctions;
  return { sut, deps, responses, name };
};

describe('asyncFunctions', () => {
  it('Should fail if call without a name', async () => {
    const { sut, deps } = makeSut();
    await expect(sut(deps)()).rejects.toThrow('You must inform the name');
  });

  it('Should fail if call without a userId on phone', async () => {
    const { sut, deps, name, responses } = makeSut();
    responses.user.id = undefined;
    await expect(sut(deps)(name)).rejects.toThrow('You must inform the userId');
  });

  it('Should return a complete response', async () => {
    const { sut, deps, name, responses } = makeSut();
    await expect(sut(deps)(name)).resolves.toEqual(responses);
  });
});
