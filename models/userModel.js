const mongoose= require('mongoose');
const userSchema=new mongoose.Schema({
   name:{ type:String,required:true},
   email:{ type:String,required:true},
   password:{type:String,required:true},
   role:{type:Number,default:0} //0 is normal user,1 is admin,2 is subadmin, 3 is editor
})

module.exports=mongoose.model("User",userSchema)