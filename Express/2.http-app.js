const express = require('express')
const app =express()

const port = 5000

app.get('/',(req,res)=>{
    console.log('the home page')
    res.status(200).send('home page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('about page')
})

app.get('*',(req,res)=>{
    res.status(404).send('page not found')
})

app.listen(port,()=>{
    console.log(`server is running on ${port}...`)
})







//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
