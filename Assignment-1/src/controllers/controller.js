const { query } = require('express');
const pool=require('../db');
const jwt = require('jsonwebtoken');

const signup=(req,res)=>{
    try{
    let {first_name,last_name,user_name,e_mail,user_password}=req.body;
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(e_mail)) {
        return res.status(400).json({message:"Invalid e-mail id"});
   }if(user_password.length<8)
    return res.status(400).json({message:"Password should be 8 characters"});
    let result=`insert into user (user_id,first_name,last_name,user_name,e_mail,user_password) values (UUID_TO_BIN(UUID()),?,?,?,?,?) `;
       //pool.connect();
       pool.query(result,[first_name,last_name,user_name,e_mail,user_password],(error,results)=>{
        if(error)
        {
            return res.status(400).json({message:error.sqlMessage});
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
    }
       catch(error)
       {
        return res.status(400).json({message:error});
       }
 };

const login=(req,res)=>{
    let {user_name,user_password}=req.body;
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if (regex.test()) {
        const result=`select * from user where  user_name=?`;
        pool.query(result,[user_name],(error,result1)=>{
            if(error)
               return  res.status(500).json({message:error});
            // if(((user_name!=result1.user_id)) || user_password!=result1.user_password)
            // {
            //     return  res.status(400).json({message:"username or password is not correct"});
            // }
            let jwtSecretKey = "key123";
            let data = {
                user_id: result1.user_id,
                user_name: result1.user_name,
                e_mail: result1.e_mail,
                user_password: result1.user_password
            }
            const token = jwt.sign(data, jwtSecretKey, { expiresIn: '1h' });
            return res.status(200).json({message:token});
        //res.status(200).json({message:result1});
         })

    }
// }

const details=(req,res)=>{
    const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const jwtSecretKey="key123";
           jwt.verify(token, jwtSecretKey,(error,data)=>{
            if(error)
            {
                return res.status(400).json({message:"username or email already exists"});
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
}
module.exports={signup,login,details};