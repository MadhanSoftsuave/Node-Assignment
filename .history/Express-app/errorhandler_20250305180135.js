const express=require('express');
co
const app=express();

app.get('/',(req,res,next)=>{
    fs.readFile('/file-does-not-exist', (err, data)=>{
    if(err)
        next(err);
    else 
    console.log("hai");
    })
})

app.listen(3001);