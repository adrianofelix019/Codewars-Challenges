/*
In this example you have to validate if a user input string is alphanumeric.
The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:
- At least one character ("" is not valid)
- Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
- No whitespaces / underscore
*/

function alphanumeric(string) {
    if (string === null || string === "")
        return false;

    alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabetsUpper = "abcdefghijklmnopqrstuvwxyz"
        .toUpperCase().split("");
    numbers = "0123456789".split("");

    let result = true
    for (char of string) {
        let isIn = alphabets.includes(char) ||
            alphabetsUpper.includes(char) || numbers.includes(char);
        if(!isIn) {
            result = false;
        }
    }

    return result;
}

console.log(alphanumeric("Mazinkaiser")) // true
console.log(alphanumeric("hello world_")) // false
console.log(alphanumeric("PassW0rd")) // true
console.log(alphanumeric("     ")) // false
