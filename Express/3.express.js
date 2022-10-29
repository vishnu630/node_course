const express =require('express')
const path = require('path')
const app =express()

// setup static and middleware
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('resouce not found')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000..')
})