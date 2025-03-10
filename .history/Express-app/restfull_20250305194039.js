const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    console.log("data");
})
app.post('/id',(req,res)=>{
    console.log("hello");
})
app.put('/up/id',(req,res)=>{
    console.log("")
})