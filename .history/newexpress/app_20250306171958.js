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
    console.log(req.body);
    const newid=movies[movies.length-1].id+1;
    const newmovie=Object.assign({id:newid},req.body);
    movies.push(newmovie);
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(200).json({
            status:"sucessfull",
            data:{
                movies:movies
            }
        })
    });
})

//handle route parameter

//handle put method
app.put('/api/v1/updatemovie',(req,res)=>{
    
})
app.listen(3001);