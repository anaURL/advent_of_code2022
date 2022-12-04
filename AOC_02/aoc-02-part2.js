/**Day 2 - Rock Paper Scissors https://adventofcode.com/2022/day/2

Part 2

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

 for (let i in input) {
    if (input[i].includes("X")) {
      if (input[i].includes("A")) total += 3;
      if (input[i].includes("B")) total += 1;
      if (input[i].includes("C")) total += 2;
    }
    if (input[i].includes("Y")) {
      if (input[i].includes("A")) total += 1;
      if (input[i].includes("B")) total += 2;
      if (input[i].includes("C")) total += 3;
      total += 3;
    }
    if (input[i].includes("Z")) {
      if (input[i].includes("A")) total += 2;
      if (input[i].includes("B")) total += 3;
      if (input[i].includes("C")) total += 1;
      total += 6;
    }
  }
  
  console.log(total);