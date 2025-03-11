const express=require('express');
const app=express();
const sendrouter=require('./src/student/routes');

app.use(express.json());

 app.use('/api/carvalue',sendrouter);

app.listen(3000,()=>{
    console.log("port is connected to 3000");
})