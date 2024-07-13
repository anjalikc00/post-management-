// const User = require("../models/userModel");
// const { validationResult } = require("express-validator");

//  const registerUser = async (req, res) => {
//   try {
//     //to check inputs from client it may return  errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(200).json({
//         sucess: false,
//         msg: error.message,
//         errors: errors.array(),//array form ma error dinxa
//       });
//     }
//   } catch (error) {
//     return res.status(400).json({
//       sucess: false,
//       msg: error.message,
//     });
//   }
// };

// module.exports={registerUser}

const User=require("../models/userModel")
const{validationResult}=require("express-validator")
const registerUser=async(req,res)=>{
  try {
     const errors =validationResult(req)
    if(!errors.isEmpty()){
      return res.status(200).json({
        success:false,
        mssssg:"errors",
        errors:errors.array()
      })
    }
  } catch (error) {
    res.status(400).json({sucess:false,msg:error.message})
  }
}