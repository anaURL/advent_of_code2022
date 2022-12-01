// Calory counting: https://adventofcode.com/2022/day/1
/**
 * Intuitively:
 *
 * 1. split the input between elves
 * 2. count the total calories of each
 * 3. sort them by total count
 * 4. get the first item in this collection (max)
 */

 const fs = require('fs')

 const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
 
 // #1: let's JSON stringify to see the newline `\n` pattern
 // console.log(JSON.stringify(input))
 
 // #2: let's use the \n\n pattern we noticed to split the elves
 const elvesString = input.split('\n\n')
 
 /**
  * #3: convert each elf's foods into an array of numbers of calories
  * Array of strings like '2074\n3476\n4064\n9446\n2889\n4871\n6298\n2970\n8588'
  * 1. We need to split by `\n` (ex: `[ "2074", "3476", "4064", "9446", "2889", "4871", "6298", "2970", "8588" ]`)
  * 2. convert strings into numbers
  */
 const elvesFoodItems = elvesString.map((str) => str.split('\n').map(Number))

 let sum = elvesFoodItems.map(arr => arr.reduce ((sum,item) => sum += item,0)) 
     return Math.max(...sum)




