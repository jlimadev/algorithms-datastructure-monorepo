const userHandler = require('./userHandler');

describe('userHandler', () => {
  it('Should export a handler function', async () => {
    expect(userHandler.handler).toBeInstanceOf(Function);
  });

  it('Should create the dependencies', async () => {
    expect(userHandler.deps).toBeInstanceOf(Object);
    expect(userHandler.deps.getUser).toBeInstanceOf(Function);
    expect(userHandler.deps.getPhone).toBeInstanceOf(Function);
    expect(userHandler.deps.getAddress).toBeInstanceOf(Function);
  });
});
