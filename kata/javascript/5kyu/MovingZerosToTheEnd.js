/* Write an algorithm that takes an array and moves all of the zeros to the end,
 * preserving the order of the other elements.
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */


const moveZeros = (arr) => {
  const arr1 = arr.filter(element => element !== 0);
  const arr2 = arr.filter(element => element === 0);
  
  return arr1.concat(arr2);
}

const exampleArray = [false,1 , 0, 1, 2, 0, 1, 3, "a"];
console.log(moveZeros(exampleArray));