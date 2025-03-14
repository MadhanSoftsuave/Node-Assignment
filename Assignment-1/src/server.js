const express=require('express');
const app=express();
const sendrouter=require('./routes/router')

app.use(express.json());

 app.use('/user',sendrouter);

app.listen(3000,()=>{
    console.log("port is connected to 3000");
})