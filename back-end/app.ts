import express, { Application } from 'express';
import connection from "./database/conn";
import cors from "cors"
import morgan from "morgan"
import productRoute from './routes/productRoute';
connection
const app=express()
const PORT=3002

app.use(cors())
app.use(morgan("dev"))
app.use('/api', productRoute);
app.get('/Taher',(req,res)=>{
    return res.send("yeah")
})
app.get("/productsK",(req,res)=>{
    const q = "SELECT * FROM products WHERE gender = 'kids' "
    connection.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data) 
    })
})
app.get("/productsM",(req,res)=>{
    const q = "SELECT * FROM products WHERE gender = 'mens' "
    connection.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data) 
    })
})

app.get("/products",(req,res)=>{
    const q = "SELECT * FROM products"
    connection.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data) 
    })
})

app.get("/products/:id", (req, res) => {
    const productId = req.params.id;
    const q = "SELECT * FROM products WHERE id = ?";
    connection.query(q, [productId], (err, data) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (Array(data).length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.status(200).json(data);
    });
  });

app.listen(PORT,()=>{
    console.log(`server is lstening at http://localhost:${PORT}`)
})







// import cors from 'cors';






