const express=require('express');
const app=express();

app.get('/',(req,res,next)=>{
    if(err)
        next(err);
    else 
    console.log("hai");
})

app.listen(3000);