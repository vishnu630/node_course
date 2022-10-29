const fs = require('fs');
const { join, basename } = require('path');
const path = require('path')


fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})

console.log('hello')

const data='this is data variable which is added to reply.txt file '

fs.writeFile(path.join(__dirname,'files','replay.txt'), data,(err)=>{
    if (err) throw err;
    console.log('write completed')
    
    fs.appendFile(path.join(__dirname,'files','replay.txt'),'\nthis is new line appended to replay text file',(err)=>{
        if (err) throw err;
        console.log("the file has appended sucessfully")
    })
    fs.rename(path.join(__dirname,'files','replay.txt'),path.join(__dirname,'files','NewReplay.txt'),(err)=>{
        if (err) throw err;
        console.log('file rename sucessful')
    })
})


process.on('uncaughtException',err =>{
 console.log(`uncaughtException ${err}`)
 process.exit(1)
})
