const mongoose=require('mongoose');

const permissionSchema=mongoose.Schema({
//userid to note kun kun user lai k k permission xa
user_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
},
//permission as an array of object store garinnxa
permissions:[
    {
        permission_name:String,
        permission_value:[Number] //0-create 1-read 2-write 3-delete
    }

]
})
module.exports=mongoose.model('Permission',permissionSchema)
/* 
user_id:ObjectId('sassa'),
permissions:[
{
permission_name:"User",
permission_value:[0,1,2,3] , --> user lai create garna xa bhani we store 0,if we want 0:create 1:read 2:write 3:delete
},
{
 permission_name:"post",
 permission_value:[0,1,2] -->sassa walla user lai post ma cread,read,and write garni matrai permission xa
},
{
permission_name:'category',
permission_value:[0,2] -->0=create 2=write
}
]


*/
