// * Given a string with alphabets only, we need to return a compressed string in a way it can be uncompressed too.
// * E.g : aaagbcccccccsccccccccactyz => a3gbc7sc8actyz

function compress(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === result[result.length - 1]) {
      count++;
    } else {
      if (count > 1) {
        result += `${char}${count}`;
        count = 1;
      } else {
        result += char;
      }
    }
  }
  return result;
}

const result = compress('aaagbcccccccsccccccccactyz');
console.log(result);
