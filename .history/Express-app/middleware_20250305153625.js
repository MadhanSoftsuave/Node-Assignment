const express=require('express');
const app=express();

let mid=function(req,res,next){
    console.log("middleware ")
}

app.use(mid);
app.get('/a',(req,res)=>{
    res.send("hai");
});
