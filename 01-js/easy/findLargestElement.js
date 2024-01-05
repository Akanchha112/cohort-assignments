/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let m;
    for(let i=0;i<numbers.length;i++){
        m=(m>numbers[i])?m:numbers[i];
    }
    return m;
}
console.log(findLargestElement([-3, -7, -2, -9, -1]));
module.exports = findLargestElement;