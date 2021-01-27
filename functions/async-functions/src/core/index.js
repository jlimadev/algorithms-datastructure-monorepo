const asyncFunctions = ({ getUser, getPhone, getAddress }) => async (
  inputName,
) => {
  if (!inputName) {
    throw new Error('You must inform the name');
  }

  try {
    const user = await getUser(inputName);

    if (!user.id) {
      throw new Error('You must inform the userId');
    }

    const promises = [await getPhone(user.id), await getAddress(user.id)];

    await Promise.all(promises);

    const [phone, address] = promises;

    const returnObject = {
      user,
      phone,
      address,
    };

    return returnObject;
  } catch (error) {
    throw error;
  }
};

module.exports = asyncFunctions;
