const express=require('express');
const app=express();

// app.get('/',(req,res)=>{
//     res.send("hello");
// })

// params= { "userId": "34", "bookId": "8989" };

// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
//   })
  
//route handlers
// app.get('/a',(req,res,next)=>{
//     console.log("the next callback");
//     next();
// },(req,res)=>{
//     res.send("hai");
// })

//array of callbackfunctions
let c1=function(req,res,next){
    console.log("hai1");
}

app.listen(3001);