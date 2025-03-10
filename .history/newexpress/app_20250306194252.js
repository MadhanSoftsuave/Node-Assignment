const express=require('express');
const fs=require('fs');
const app=express();

const movies=JSON.parse(fs.readFileSync('./data/movies.json'));

app.use(express.json());

//custom middleware
app.use((req,res,next)=>{
    req.entrytime=new Date().toISOString();
    next();
})


app.use('/api/v1/movies',movierouter)
let getmovies=(req,res)=>{
    res.status(200).json({
        status:"sucessfull",
        entrytime:req.entrytime,
        data:{
            movies:movies
        }
    })
}

let createmovie=(req,res)=>{
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
}

let getmoviebyid=(req,res)=>{
    let id=req.params.id*1;
    let movie=movies.find((el)=>{return el.id===id})
    res.status(200).json({
        status:"sucessfull",
        data:{
            movies:movie
        }
    })
}

let updatemovie=(req,res)=>{
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
}

let deletemovie=(req,res)=>{
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
}


//mounting the middleware
const movierouter=express.Router();
movierouter.route('/api/v1/movies')
.get(getmovies)
.post(createmovie);

movierouter.route('/api/v1/movies/:id')
.get(getmoviebyid)
.patch(updatemovie)
.delete(deletemovie);


// //handle get method
// app.get('/api/v1/movies',getmovies);

// //handle post method
// app.post('/api/v1/movies',createmovie);

// //handle route parameter
// app.get('/api/v1/movies/:id',getmoviebyid);

// //handle patch method
// app.patch('/api/v1/movies/:id',updatemovie);

// //handling delete methode
// app.delete('/api/v1/movies/:id',deletemovie);

// app.route('/api/v1/movies')
// .get(getmovies)
// .post(createmovie);

// app.route('/api/v1/movies/:id')
// .get(getmoviebyid)
// .patch(updatemovie)
// .delete(deletemovie);

app.listen(3001);