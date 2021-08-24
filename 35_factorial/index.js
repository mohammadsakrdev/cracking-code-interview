function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFactorial(n) {
  if (n === 2) {
    return n;
  }
  return n + factorial(n - 1);
}

const factorial = memoize(slowFactorial);

module.exports = factorial;

// function factorial(n) {
//   if (n === 2) {
//     return n;
//   }
//   return n * factorial(n - 1);
// }
