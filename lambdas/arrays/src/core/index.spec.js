const index = require('./index');

describe('index', () => {
  it('Should export correctly the functions', () => {
    // Filter
    expect(index.filterFunction).toBeInstanceOf(Function);
    // Map
    expect(index.mapFunction).toBeInstanceOf(Function);
    // Reduce
    expect(index.mapFunction).toBeInstanceOf(Function);
  });
});
