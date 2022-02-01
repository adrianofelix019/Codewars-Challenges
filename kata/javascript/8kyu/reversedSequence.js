/*
 * Build a function that returns an array of integers from n to 1 where n > 0.
 *
 * Example: n = 5 >> [5, 4, 3, 2, 1]
 */

function reversedSeq(n) {
  let array = Array.from(Array(n + 1).keys()).reverse()
  array.pop()
  return array
}
