const express=require('express');
const fs=require('fs');
const app=express();

const movies=json.parsefs.readFileSync('./data/movies.json');

//handle get method
app.get('/',(req,res)=>{
    res.status(200).json({
        status:"sucessfull",
        data:{
            movies:movies
        }
    })
})
app.listen(3001);