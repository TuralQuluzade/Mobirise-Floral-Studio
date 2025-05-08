import express from "express"
import cors from "cors"
import productRouter from "./router/productRouter.js"
import { connectDB } from "./config/config.js"
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors("*"))

app.use("/",productRouter)
 connectDB()
app.listen(5000,()=>{
    console.log("Backend Qalxdi");
    
})