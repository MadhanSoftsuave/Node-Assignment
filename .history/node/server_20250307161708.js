const http=require("http");
const server=http.createServer((req,res)=>{
  if(req.url=="/getuserid")
  {
    
  }
})
server.listen(3001);

//using express
// const express=require('express');
// const app= express();
// app.get('/',(req,res)=>{
//   console.log("hello");
//   res.end("hai");
// })
// app.listen(3001);