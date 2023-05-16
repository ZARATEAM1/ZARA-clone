import express from "express";
import connection from "./database/conn";
connection
const app=express()
const PORT=3002

app.get('/ala',(req,res)=>{
    return res.send("yeah")
})
app.listen(PORT,()=>{
    console.log("server is lstening at http://localhost:3002")
})
