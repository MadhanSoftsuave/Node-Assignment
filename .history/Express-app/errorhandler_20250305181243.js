const express=require('express');
const fs=require('fs');
const app=express();

// app.get('/',(req,res,next)=>{
//     fs.readFile('./router.js', (err, data)=>{
//     if(err)
//         next(err);
//     else 
//     res.end("hai"),console.log("hai");
//     })
// })

app.get('/',(rq,res,next))

app.listen(3001);