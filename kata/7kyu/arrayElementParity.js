/* In this Kata, you will be given an array of integers whose elements have both a negative and a positive value,
 * except for one integer that is either only negative or only positive. Your task will be to find that integer.
 * For example:
 * solve[1,-1,2,-2,3] = 3  --> 3 only has a positive ocurrence.
 * solve([-3,1,2,3,-1,-4,-2]) = -4  --> -4 only has a negative occurence
 * solve([1,-1,2,-2,3,3]) = 3  --> the integer that is only positive or only negative my appear more than once.
 */

function solve(arr) {
    return arr.filter(n => arr.indexOf(-n) === -1)[0]
}

console.log(solve([1,-1,2,-2,3]))
console.log(solve([-3,1,2,3,-1,-4,-2]))
console.log(solve([1,-1,2,-2,3,3]))
