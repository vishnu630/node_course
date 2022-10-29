const http=require('http')

const server = http.createServer((req,res)=>{
    // res.write('Welcome to our page')
    if(req.url === '/'){
        res.write('this is next page')
        res.end()
    }
    if(req.url === '/about'){
        res.end('this is new  page')
    }
})

server.listen(5001)  