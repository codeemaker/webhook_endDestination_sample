import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = new express();

dotenv.config();

app.use(express.json())


app.post("/api/webhooks",(req,res)=>{
    console.log(req.body)
})

app.post("/api/webhooks2",(req,res)=>{
    console.log(req.body)
})

app.post("/api2/webhooks",(req,res)=>{
    console.log("Two"+req.body)
})

app.post("/api2/webhooks2",(req,res)=>{
    console.log("Two"+req.body)
})




app.listen(7001,()=>{
    console.log("Server listening on port 5000")
})