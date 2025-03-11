const { query } = require('express');
const pool=require('../../db');
const queries=require('./queries');

let getcar=(req,res)=>{
    pool.query(queries.getstudents,(error,results)=>{

        if(error)
            throw error;
        else 
        res.status(200).json(results.rows);
    })
}
let getcarid=(req,res)=>{
    let id=req.params.id;
    pool.query(queries.getstudentbyid,[id],(error,results)=>{
        if(error)
            throw error;
        else 
        res.status(200).json(results.rows);
    })
}
let addstudent=(req,res)=>{
    let { car_name, car_model } = req.body;
    pool.query(queries.addstudent,[car_name,car_model],(error,results)=>{
        if(error)
            throw error;
        else
        res.status(200).json(results);
    })
}
let removecar=(req,res)=>{
    let id=req.params.id;
    pool.query(queries.removecar,[id],(error,results)=>{
        if(error)
            throw error;
        else 
        res.status(200).json(results);
    })
}
module.exports={getcar,getcarid,addstudent,removecar};