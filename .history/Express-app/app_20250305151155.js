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
// let c1=function(req,res,next){
//     console.log("hai1");
//     next();
// }
// let c2=function(req,res,next){
//     console.log("hai2");
//     next();
// }
// let c3=function(req,res){
//     console.log("hai3");
// }
// app.get('/a',[c1,c2,c3]);

const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  app.get('/a', [cb0, cb1], (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from D!')
  })

app.listen(3000);