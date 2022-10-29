const { format} =require('date-fns')
const {v4} = require('uuid')
console.log(format(new Date(), 'yyy/MM/dd\t HH:mm:ss'))

console.log("hello")
console.log(v4())