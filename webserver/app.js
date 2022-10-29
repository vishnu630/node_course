// const {readFile,writeFile} =require('fs').promises
// const EventEmitter=require('events')
// const myEventEmitter = new EventEmitter()

// const start = async () =>{
//     try{
//         // await writeFile('./first.txt','this is first file written')
//         // await writeFile('./second.txt','this is second file written')
//         const res= await readFile('./first.txt','utf-8')
//         const res2= await readFile('./second.txt','utf-8')
//         console.log(res,res2)
//     }
//     catch (err){
//         console.log(err)
//     }
// }
// start()

// myEventEmitter.on('res',(name,desg)=>{
//     console.log(`this is my emitter on triggered ${name} and ${desg}`,)
// }
// )

// myEventEmitter.emit('res','vishnu','programmer')

const http=require('http')

const server=http.createServer()
server.on('server',(req,res)=>{
    const val='<h1> this is my page</h1>'
    res.end(val)
})
server.listen(5000,()=>{
    console.log('listining on port 5000 ')
})