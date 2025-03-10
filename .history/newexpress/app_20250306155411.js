const express=require('express');
const fs=require('fs');
const app=express();

const movies=JSON.parse(fs.readFileSync('./data/movies.json'));

//handle get method
app.get('/api/v1/movies',(req,res)=>{
    res.status(200).json({
        status:"sucessfull",
        data:{
            movies:movies
        }
    })
})

//handle post 
app.listen(3001);