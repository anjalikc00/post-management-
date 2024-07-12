require('dotenv').config;
const mongoose=require('mongoose')
const authRoute=require("./routes/authRoute")

const connectionn=mongoose.connect("mongodb://127.0.0.1:27017/user-roles-perm")
console.log(connectionn)
const express=require("express")
const app=express();
app.use(express.json())
app.use(express.static('public'))

//including routes
app.use("/api",authRoute)
const port=process.env.SERVER_PORT || 8000;
app.listen( port,()=>{
    console.log(`server is running onport ${port}`)
})