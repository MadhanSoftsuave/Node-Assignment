const express=require('express');
const fs=require('fs');
const app=express();

const movies=JSON.parse(fs.readFileSync('./data/movies.json'));

app.use(express.json());

//handle get method
app.get('/api/v1/movies',(req,res)=>{
    res.status(200).json({
        status:"sucessfull",
        data:{
            movies:movies
        }
    })
})

//handle post method
app.post('/api/v1/movies',(req,res)=>{
    //console.log(res.body);
    const newid=movies[movies.length-1].id+1;
    const newmovie=Object.assign({newid},res.body);
    movies.push(newmovies);
})
app
.listen(3001);