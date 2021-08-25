//Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// Return the quotient after dividing dividend by divisor.
// https://dev.to/seanpgallivan/solution-divide-two-integers-5dcd
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  let ans = 0,
    sign = 1;
  if (dividend < 0) (dividend = -dividend), (sign = -sign);
  if (divisor < 0) (divisor = -divisor), (sign = -sign);
  if (dividend === divisor) return sign;
  for (let i = 0, val = divisor; dividend >= divisor; i = 0, val = divisor) {
    while (val > 0 && val <= dividend) val = divisor << ++i;
    (dividend -= divisor << (i - 1)), (ans += 1 << (i - 1));
  }
  return sign < 0 ? -ans : ans;
}

module.exports = strStr;
