const http = require("http");
const express = require('express');
const path = require("path");
const app = express();
const PORT = 9000;
const {Server} = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

 //scoket.io
//socket refers to client or users
io.on('connection',(socket)=>{
    socket.on('user-message',(message)=>{
       io.emit('message',message) //if message recive it give msg to others
    })
});  // every socket have a id which it automatically manage 

app.use(express.static(path.resolve("./public")));

app.get('/',(req,res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(PORT,()=> console.log(`server started at ${PORT}`))
