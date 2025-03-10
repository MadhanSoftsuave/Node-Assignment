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
        res.status(201).json({
            status:"sucessfull",
            data:{
                movies:movies
            }
        })
    });
})

//handle route parameter
app.get('/api/v1/movies/:id',(req,res)=>{
    let id=req.params.id*1;
    let movie=movies.find((el)=>{return el.id===id})
    res.status(200).json({
        status:"sucessfull",
        data:{
            movies:movie
        }
    })
})

//handle patch method
app.patch('/api/v1/movies/:id',(req,res)=>{
    let id = req.params.id*1;
    let movietoupdate=movies.find((el)=>{return el.id===id});
    let index=movies.indexOf(movietoupdate);
    Object.assign(movietoupdate,req.body);
    movies[index]=movietoupdate;
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(200).json({
            status:"sucessfull",
            data:{
                movies:movies
            }
        })
    });
})

//handling delete methode
app.delete('/api/v1/movies/:id',(req,res)=>{
    let id=req.params.id*1;
    let movietodelete=movies.find((el)=>{return el.id===id});
    let index=movies.indexOf(movietodelete);
    movies.splice(index,1);
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(204).json({
            status:"sucessfull",
            data:{
                movies:movies
            }
        })
    });
})

app.listen(3001);