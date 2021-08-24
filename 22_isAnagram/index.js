function isAnagram(s, t) {
  s = s.replace(/[\W_]/g, '');
  t = t.replace(/[\W_]/g, '');
  if (s.length !== t.length) {
    return false;
  }

  const sChar = {};
  const tChar = {};

  for (let i = 0; i < s.length; i++) {
    sChar[s[i]] = sChar[s[i]] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!sChar[t[i]]) {
      return false;
    } else {
      sChar[t[i]]--;
    }
  }

  return true;
}

module.exports = isAnagram;
