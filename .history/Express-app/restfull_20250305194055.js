const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    console.log("data shown");
})
app.post('/id',(req,res)=>{
    console.log("dat ");
})
app.put('/up/id',(req,res)=>{
    console.log("")
})