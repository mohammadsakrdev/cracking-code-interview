/**
 * @param {string} s
 * @return {number}
 */
function atoi(s) {
  let i = 0;
  let sign = Math.sign(1);
  let num = 0;
  let length = s.length;
  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = Math.pow(2, 31) * -1;

  while (i < length && s[i] === ' ') {
    i++;
  }

  if (i === length) {
    return num;
  }

  if (s[i] === '+') {
    i++;
  } else if (s[i] === '-') {
    i++;
    sign = Math.sign(-1);
  }

  for (; i < length && s[i] >= '0' && s[i] <= '9'; i++) {
    num = num * 10 + (s[i] - '0');
  }

  num = num * sign;

  if (num < MIN_INT) {
    return MIN_INT;
  } else if (num > MAX_INT) {
    return MAX_INT;
  }

  return num;
}

module.exports = atoi;
