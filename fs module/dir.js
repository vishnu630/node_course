 const fs = require('fs')

if (!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if (err) throw err;
        console.log("dir created")
    })
}
else{
    console.log("the dir is already existing")
}
if(fs.existsSync('./new')){
    fs.rmdir('./new',err=>{
        if(err) throw err;
        console.log('this has be removed sucessfully')
    })
}

 process.on('uncaughtException',(err)=>{
    console.log(`uncaughtException ${err}`)
    process.exit(1)
 })
