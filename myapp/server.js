console.log('hello')
// console.log(global)
const os= require('os')
const path =require('path')
const math=require('./math')


// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
// console.log(path.extname(__filename))

console.log(math.sub(2,3))