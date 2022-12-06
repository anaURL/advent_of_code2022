// https://adventofcode.com/2022/day/6
const fs = require('fs')
 const input = fs.readFileSync('./input.txt', 'utf-8') 


 const findUnique = (str) => {
    return new Set(str).size == str.length;
  }
  
  for (let index = 0; index < input.length; index++) {
    const item = input.slice(index, index + 4)
  
    if (findUnique(item)) {
      console.log(item)
      console.log(input.indexOf(item) + 4)
      break
    }
  }



