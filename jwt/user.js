const express=require('express');
const app=express();
const pool=require('./db');

app.use(express.json());

app.post('/',async(req,res)=>{
    let {first_name,last_name,user_name,e_mail,password}=req.body;

    let result=`insert into user(user_id,first_name,last_name,user_name,e_mail,user_password)
    values(UUID_TO_BIN(UUID()),?,?,?,?)`;
    
    await pool.query(result,[first_name,last_name,user_name,e_mail,password],(error,data)=>{
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

app.get('/',(req,res)=>{
    console.log("hai");
})
app.listen(3000,()=>{
    console.log("server is connected to port 3000");
})
