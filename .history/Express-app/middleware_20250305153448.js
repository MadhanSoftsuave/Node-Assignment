const express=require('express');
const app=express();


app.use(mid);
app.get('/a',(req,res)=>{
    res.send("hai");
});
