module.exports = function reverse(number) {
  const str = Math.abs(number).toString();
  let res = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += str[i];
  }

  return Number(res);
};
