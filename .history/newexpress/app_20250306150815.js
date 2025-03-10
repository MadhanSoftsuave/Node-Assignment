const express=require('express');
const app=express();

//handle get method
app.get('/',(req,res)=>{
    res.status(200).json({
        status:"sucessfull",
        data:{
            
        }
    })
})
app.listen(3001);