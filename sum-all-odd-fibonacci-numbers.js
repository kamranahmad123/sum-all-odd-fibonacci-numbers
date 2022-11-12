module.exports = function (num) {
  let resultant = [0, 1];
  let sum = 0;
  for (let i = 1; i < num; i++) {
    resultant.push(resultant[i] + resultant[i - 1]);
  }
  for (let i = 1; i < resultant.length; i++) {
    if (resultant[i] <= num && resultant[i] % 2 !== 0) {
      sum += resultant[i];
    }
  }
  return sum;
}
