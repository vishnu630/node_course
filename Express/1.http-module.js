const fs=require('fs')
const http = require('http')

const readhtml= fs.readFileSync('homepage.html')

const server = http.createServer((req,res)=>{
   const url = req.url
   if (url === '/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(readhtml)
    res.end()
   }
   else if(url ==='/about'){
    res.writeHead(200,{'content':'text/html'})
    res.write('<h1>about page</h1>')
    res.end()
   }
   else{
    res.writeHead(404)
    res.end()
   }
})

server.listen(5000,()=>{
    console.log('server listening on 5000')
})