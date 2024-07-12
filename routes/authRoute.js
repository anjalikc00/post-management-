const express=require('express');
const authController=require("../controllers/authController")

const{registerValidator}=require("../helpers/validator")
const router=express();
// router.route("/register").post(registerValidator, authController)
module.exports=router;