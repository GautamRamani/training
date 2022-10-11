const http=require("http");
const { json } = require("stream/consumers");
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('hello World...')
        res.end();
    }

    if(req.url==='/api'){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
})
server.listen(3000,()=>{
    console.log('server listening the port number 3000')
})