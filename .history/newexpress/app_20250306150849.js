const express=require('express');
const fs=require('fs');
const app=express();

const movies=
//handle get method
app.get('/',(req,res)=>{
    res.status(200).json({
        status:"sucessfull",
        data:{

        }
    })
})
app.listen(3001);