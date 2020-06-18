/* Given an integer as input, can you round it to the next (meaning, "higher") 5?
 *
 * Examples:
 * input:    output:
 * 0    ->   0
 * 2    ->   5
 * 3    ->   5
 * 12   ->   15
 * 21   ->   25
 * 30   ->   30
 * -2   ->   0
 * -5   ->   -5
 * etc.
 */

const roundToNext5 = (n) => {
  while(n % 5 != 0) {
    n++;
  }

  return n;
}

console.log(roundToNext5(0));
console.log(roundToNext5(2));
console.log(roundToNext5(3));
console.log(roundToNext5(12));
console.log(roundToNext5(21));
console.log(roundToNext5(30));
console.log(roundToNext5(-2));
console.log(roundToNext5(-5));
