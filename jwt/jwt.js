
const { jwtDecode } = require('jwt-decode');
const express = require('express');
// const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const pool=require('./db');

const app = express();

app.use(express.json());

app.post("/user/generateToken", (req, res) => {
    let {first_name,last_name,user_name,e_mail,user_password}=req.body;
    if(user_password.length>8)
        return res.status(400).json("set password to 8 digits");
    let result=`insert into user (user_id,first_name,last_name,user_name,e_mail,user_password) values (UUID_TO_BIN(UUID()),?,?,?,?,?) `;
       //pool.connect();
       pool.query(result,[first_name,last_name,user_name,e_mail,user_password],(error,results)=>{
        if(error)
        {
            console.log(error);
        }
        else{
            let result1=`select BIN_TO_UUID(user_id)as user_id from user where e_mail=?`;
            pool.query(result1,[e_mail],(error,result2)=>{
                if(error)
                    return res.status(400).json({message:error});
            let jwtSecretKey = "key123";
            let data = {
                user_id: result2[0].user_id,
                user_name: user_name,
                e_mail: e_mail,
                user_password: user_password
            }
        
            const token = jwt.sign(data, jwtSecretKey, { expiresIn: '1h' });
        
            return res.status(200).json({message:token});
        })
        }
       });
       //res.status(200).json("done");
    
 });

app.get("/user/validateToken", (req, res) => {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const jwtSecretKey="key123";
           jwt.verify(token, jwtSecretKey,(error,data)=>{
            if(error)
            {
                return res.status(400).json({message:error});
            }
            let {user_id,user_name,user_password}=data;
            //console.log(user_id);
            let result=`select BIN_TO_UUID(user_id) as user_id, first_name, last_name, user_name, e_mail, user_password from user where BIN_TO_UUID(user_id)=? and user_name=? and user_password=?`;
            pool.query(result,[user_id,user_name,user_password],(error,decoded)=>{
                if(error)
                {
                    return res.status(400).json({message:error});
                }
               // console.log(results);
                return res.status(200).json({message:"successfully verified",user: decoded});
            })
           })
        })

app.listen(3000, () => {
    console.log("Server is connected to port 3000");
});

