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
app.get('/a',(req,res,next)=>{
    console.log("the next callback");
    next();
},res)

app.listen(3001);