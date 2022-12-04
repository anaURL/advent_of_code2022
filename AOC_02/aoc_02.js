/**Day 2 - Rock Paper Scissors https://adventofcode.com/2022/day/2

Part 1 

1 A ROCK
2 B Paper 
3 C Scissors 

ME
 X ROCK 1 
 Y PAPER  2 
 X Scissors 3
 
 */

 const fs = require('fs')
 const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')
 let total = 0
 //use for in loop to check whether the result includes rock (x), paper (y) or scissors (x)

 for (let i in input) {
    if (input[i].includes('X')) total +=1;
    if (input[i].includes('Y')) total +=2;
    if (input[i].includes('Z')) total +=3;
//
    if (input[i] === "A Y" || input[i] === "B Z" || input[i] === "C X") total += 6;
    else if (input[i] === "A X" || input[i] === "B Y" || input[i] === "C Z") total += 3;

 }
 console.log(total);














