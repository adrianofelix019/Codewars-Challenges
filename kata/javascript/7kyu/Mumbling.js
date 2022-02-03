/* This time no story, no theory. The examples below show you how to
 * write function accum:
 * 
 * Examples:
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 * 
 * The parameter of accum is a string which includes only letters from
 * a..z and A..Z.
 */

const multiplyLetters = (letter, value) => letter.repeat(value + 1)
const capitalize = letterSequence => letterSequence.charAt(0).toUpperCase() + letterSequence.slice(1).toLowerCase()

function accum(s) {
	let lettersArray = s.split('')
  return lettersArray.map(multiplyLetters)
    .map(capitalize)
    .join('-')
}
