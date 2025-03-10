const express=require('express');
const app=express();

let mid=function(req,res,next){
    console.log("middleware called");
    next();
}
let mid1=function(req,res,next){
    console.log("middleware called 1");
    next();
}

app.use(mid,mid);
app.get('/a',(req,res)=>{
    res.send("hai");
});

app.listen(3001);