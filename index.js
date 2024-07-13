require('dotenv').config;
const mongoose=require('mongoose')
const authRoute=require("./routes/authRoute")

// const connectionn=mongoose.connect("mongodb://127.0.0.1:27017/userPermission")
const uri="mongodb://127.0.0.1:27017/userPermission"
async  function connect(){
    try{
        await mongoose.connect(uri)
        console.log("connected to mongodb")
    }catch(er){
        console.log(er)
    }
}
connect();
const express=require("express")
const app=express();
app.use(express.json())
app.use(express.static('public'))

//including routes
app.use("/api",authRoute)
// app.use("/user")
const port=process.env.SERVER_PORT || 8000;
app.listen( port,()=>{
    console.log(`server is running onport ${port}`)
})