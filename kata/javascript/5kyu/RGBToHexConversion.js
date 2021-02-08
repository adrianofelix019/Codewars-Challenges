/* The rgb function is incomplete. Complete it so that passing in RGB decimal
 * values will result in a hexadecimal representation being returned. Valid
 * decimal values for RGB are 0 - 255. Any values that fall out of that range
 * must be rounded to the closest valid value.
 * Note: Your answer should always be 6 characters long, the shorthand with
 * 3 will not work here.
 * 
 * The following are examples of expected output values:
 * rgb(255, 255, 255) // returns FFFFFF
 * rgb(255, 255, 300) // returns FFFFFF
 * rgb(0,0,0) // returns 000000
 * rgb(148, 0, 211) // returns 9400D3
 */

const rgb = (...rgb) => {
  return rgb.map(v => {
    if(v <= 0) return '00';
    if(v <= 16) return '0' + v.toString(16);

    return v <= 255 ? v.toString(16) : 'ff';
  }).join('').toUpperCase();
}

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));