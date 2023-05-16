import express from "express";
const app=express()
const PORT=3001

app.get('/',(req,res)=>{
    return res.send("yeah")
})
app.listen(PORT,()=>{
    console.log("server is lstening at http://localhost:3001")
})
