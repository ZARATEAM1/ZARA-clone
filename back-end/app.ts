import express from "express";
import connection from "./database/conn";
import cors from 'cors'
import Login from "./routes/login";
import Sign from "./routes/sign";
connection
const app=express()
app.use(cors())
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
const PORT=3002

app.use('/user',Login)
app.use('/user',Sign)
app.listen(PORT,()=>{
    console.log("server is lstening at http://localhost:3002")
})
