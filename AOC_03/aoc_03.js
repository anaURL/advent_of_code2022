/** Day 3 https://adventofcode.com/2022/day/3 
 * 
 *  First half of the characters = items in first compartment, second half the second compartment.
 
 1. Split lines in two 
 2. Find common item in both lines
 3. Find out priority: Lowercase items a through z have priorities 1 - 26. Uppercase item types A through Z have priorities 27 - 52.
 4. Calculate the sum of the priorities of those item types
*/

 const fs = require('fs')
 const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')
// console.log(input)

let sum =0;
input.forEach((str)=> {
const lineOne = str.slice(0,str.length/2)
const lineTwo = str.slice(str.length/2, str.length);

for (let i=0; i < lineTwo.length; i++) {
    if (lineTwo.includes(lineOne[i])) { 
        if (lineOne[i] == lineOne[i].toLowerCase()) {
            sum += lineOne[i].charCodeAt(0) - 96;
} else {
    sum += lineOne[i].charCodeAt(0) - 38
}
break
}
}
})


console.log(sum)
// console.log(commonChar(lineOne,lineTwo))