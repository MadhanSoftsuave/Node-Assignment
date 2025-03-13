// Filename - index.js

const express = require('express');
// const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();


app.post("/user/generateToken", (req, res) => {

    // let {first_name,last_name,user_name,e_mail,password}=req.body;
    // let result=`insert into users(user_id,first_name,last_name,user_name,e_mail,password)
    // values(uuid_generate_v4(),$1,$2,$3,$4,$5)`;
    // pool.query(result,[first_name,last_name,user_name,e_mail,password],(error,data)=>{
    //     if(error)
    //     {
    //         res.status(500).json(error);
    //     }
    //     else 
    //     {
    //         res.status(200).json(data);
    //     }
    // })
    let jwtSecretKey = "key123";
    let data = {
        user_name:"rajkumar",
        mail:"rk001@gmail.com",
        key:"password"
    }

    const token = jwt.sign(data, jwtSecretKey, { expiresIn: '1h' });

    res.send(token);
});

app.get("/user/validateToken", (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const jwtSecretKey="key123";
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.send({message:"Successfully Verified"});
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});

app.listen(3000,()=>{
    console.log("server is connected to port 3000");
})
