import express from "express";
import connection from "./database/conn";


const app=express()
const PORT=3001

app.use(express.json({limit:'100mb'}))
app.use(express.urlencoded({extended:true,limit:"100mb"}))
app.get('/',(req,res)=>{
    return res.send("yeah")
})
app.listen(PORT,()=>{
    console.log("server is lstening at http://localhost:3001")
})


