const { json } = require('express')
const express =require('express')
const {products}=require('./data')
const app =express()

app.get('/',(req,res)=>{
    res.send('<h1> this is home page</h1> <a href="/api/products">products</a>')
})
app.get('/products',(req,res)=>{
    const product =products.map((ele)=>{
        const {id,name,desc}=ele
        return {id,name,desc}
    })
    res.json(product)
})

app.get('/products/:id',(req,res)=>{
    const fil=products.find((ele)=>{
        return ele.id === Number(req.params.id)
    })
    if(!fil){
        res.status(404).send('no product found')
    }
    else{
    res.json(fil)
    }

})

app.get('/products/:query',(req,res)=>{
console.log(req.params)
const product =products.map((ele)=>{
    return ele.id === Number(req.params.query)
})
res.json(product)
})

app.post('/api/products',(req,res)=>{

    
})
app.listen(5000,()=>{
    console.log('server running on 5000')
})
console.log(db.version())