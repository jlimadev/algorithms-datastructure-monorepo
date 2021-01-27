const getUser = (name) => new Promise((resolve, reject) => {
  if (!name) {
    reject(new Error('You must inform the name'));
  }
  setTimeout(
    () => resolve({
      id: 1,
      name,
      age: 600,
    }),
    500,
  );
});

const getPhone = (userId) => new Promise((resolve, reject) => {
  if (!userId) {
    reject(new Error('No userId found'));
  }
  setTimeout(
    () => resolve({
      userId,
      ddd: 11,
      phone: 40028922,
    }),
    1000,
  );
});

const getAddress = (userId) => new Promise((resolve, reject) => {
  if (!userId) {
    reject(new Error('No userId found'));
  }
  setTimeout(
    () => resolve({
      userId,
      street: 'Groove Street',
      number: 100,
    }),
    500,
  );
});

module.exports = { getUser, getPhone, getAddress };
