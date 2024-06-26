const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
   title:{type:String,required:true},
   description:{type:String,required:true},
   categories:{type:Array,required:false}
})
module.exports=mongoose.model("Post",postSchema)