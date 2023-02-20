const express =require('express');
const router =require('./src/routes/api');
const app= new express();
const rateLimit =require('express-rate-limit');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');

//config input
require('dotenv').config({path:'./config.env'})

const mongoose =require('mongoose');
// const path = require("path");
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)



// Mongo DB Database Connection
mongoose.set('strictQuery', true);
let URI=process.env.URI;
let OPTION={user:process.env.DB_USER,pass:process.env.DB_PASS,autoIndex:true}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})

// Routing Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;