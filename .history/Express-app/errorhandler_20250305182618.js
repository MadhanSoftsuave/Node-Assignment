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

app.get('/',async(req,res,next)=>{
    //const rel=await fs.readFile('./router.js');
    res.send("hai");
})


app.listen(3001);