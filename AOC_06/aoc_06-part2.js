
const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8') 

const findUnique = (str) => {
    return new Set(str).size == str.length;
  }
  
  for (let i = 0; i < input.length; i++) {
    const item = input.slice(i, i + 14)
  
    if (findUnique(item)) {
      console.log(item)
      console.log(input.indexOf(item) + 14)
      break
    }
  }