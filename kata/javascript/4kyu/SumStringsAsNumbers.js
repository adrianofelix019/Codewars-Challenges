/*
Given the string representations of two integers, return the string
representation of the sum of those integers.

For example:
sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides
the ten numerals "0" to "9".
*/

// This solution still in progress...

function sumStrings(a,b) {
    a = a === '' ? '0' : a
    b = b === '' ? '0' : b
    const result = (Number.parseInt(a) + Number.parseInt(b))
        .toLocaleString('fullwide', { useGrouping: false });

    return result;
}

console.log(sumStrings('123', '456')); // expected '579'
console.log(sumStrings('', '5')); // expected '5'

// expected '7.125774134884027e+26'
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
