/* Given a positive integer n, calculate the following sum:
 * n + n/2 + n/4 + n/8 + ...
 * All elements of the sum are the results of integer division.
 * Example
 * 25  =>  25 + 12 + 6 + 3 + 1 = 47
 * 127 => 127 + 63 + 31 + 15 + 7 + 3 + 2
 */

const halvingSum = n => {
  let sum = 0;
  let r = n;
  let d = 2;

  while(r >= 1) {
    if(sum == 0) {
      sum += n
    } else {
      r = parseInt(n / d);
      console.log(r);
      sum += r;
      d = d*2;
    }

  }

  return sum;
}

console.log(halvingSum(25));
console.log(halvingSum(127));