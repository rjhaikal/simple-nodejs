require('dotenv').config()
const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('Hello World with Nevtik')
    }if(req.url == '/nevtik'){
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end('Belajar Docker bersama Nevtik')
    }
})

server.listen(port,() => {
    console.log(`this app is running on ${port}`)
})
