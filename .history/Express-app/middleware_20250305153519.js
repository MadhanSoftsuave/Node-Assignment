const express=require('express');
const app=express();

let mid=function(eq,res)

app.use(mid);
app.get('/a',(req,res)=>{
    res.send("hai");
});
