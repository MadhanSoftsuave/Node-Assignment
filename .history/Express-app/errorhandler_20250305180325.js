const express=require('express');
const fs=require('fs');
const app=express();

app.get('/',(req,res,next)=>{
    fs.readFile('./router.js', (err, data)=>{
    if(err)
        next(err);
    else 
    console.log("hai");
    })
})

app.listen(3001);