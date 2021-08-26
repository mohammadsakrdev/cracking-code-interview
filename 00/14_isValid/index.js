const isValid = (s) => {
  let arr = [];
  const pairsHashMap = { '(': ')', '[': ']', '{': '}' };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (pairsHashMap[char]) {
      arr.push(char);
    } else if (pairsHashMap[arr.pop()] !== char) {
      return false;
    }
  }

  return arr.length === 0;
};

module.exports = isValid;
