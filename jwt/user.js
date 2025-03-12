const express=require('express');
const app=express();
const pool=require('./db');

app.use(express.json());

app.post('/',async(req,res)=>{
    let {first_name,last_name,user_name,e_mail,password}=req.body;
    let result=`insert into users(user_id,first_name,last_name,user_name,e_mail,password)
    values(uuid_generate_v4(),$1,$2,$3,$4,$5)`;
    pool.query(result,[first_name,last_name,user_name,e_mail,password],(error,data)=>{
        if(error)
        {
            res.status(500).json(error);
        }
        else 
        {
            res.status(200).json(data);
        }
    })

})

app.listen(3000,()=>{
    console.log("server is connected to port 3000");
})
