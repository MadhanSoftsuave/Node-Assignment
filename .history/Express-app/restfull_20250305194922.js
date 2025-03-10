const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    console.log("data shown");
})
app.post('/id',(req,res)=>{
    console.log("data created");
})
app.put('/up/id',(req,res)=>{
    console.log("data updated");
})
app.delete('/delete',(req,res)=>{
    console.log("data deleted");
})

app.listen(3001)