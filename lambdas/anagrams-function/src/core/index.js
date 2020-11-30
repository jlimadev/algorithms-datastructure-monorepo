/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another.
 */

const anagram = (firstString, secondString) => {
  if (firstString.length !== secondString.length) {
    return false;
  }

  if (firstString === secondString) {
    return true;
  }

  const lookup = {};
  firstString.split('').forEach((char) => {
    lookup[char] = lookup[char] + 1 || 1;
  });

  return secondString.split('').every((char) => {
    if (!lookup[char]) {
      return false;
    }

    lookup[char] -= 1;
    return true;
  });
};

module.exports = anagram;
