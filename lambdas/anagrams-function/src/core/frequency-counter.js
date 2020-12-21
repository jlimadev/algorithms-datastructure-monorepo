const someFunction = (str1, str2) => {
  const firstObject = {};

  str1.split('').forEach((char) => {
    const lower = char.toLowerCase();
    firstObject[lower] = firstObject[lower] + 1 || 1;
  });

  const result = str2.split('').every((char) => {
    const lower = char.toLowerCase();
    const charExists = !!firstObject[lower];

    if (!charExists || firstObject[lower] === 0) {
      return false;
    }

    firstObject[lower] -= 1;
    return true;
  });

  console.log(firstObject);
  console.log(result);
};

someFunction('Jonathan', 'naaathanoj');
