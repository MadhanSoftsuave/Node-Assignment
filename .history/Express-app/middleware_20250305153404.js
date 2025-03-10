const express=require('express');
const app=express();

app.get('/a',(req,res)=>{
    res.send("hai");
});