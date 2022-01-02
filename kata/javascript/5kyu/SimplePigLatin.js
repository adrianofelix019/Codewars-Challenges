/* Move the first letter of each word to the end of it, then add "ay" to the
 * end of the word. Leave punctuation marks untouched.
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str) {
  let strArray = str.split(' ')
  return strArray.map(word => {
    let firstChar = word.charAt(0)
    let newWord = word.substring(1)

    newWord += firstChar
    if (word.match(/^[a-zA-Z]+$/i))
      newWord += 'ay'
      
    return newWord
  }).join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))