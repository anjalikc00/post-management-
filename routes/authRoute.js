const {Router}=require("express");


const router=Router()
// const router=express();
const authcontroller=require("../controllers/authController")
const validator=require("../helpers/validator")

router.post('/register',validator,authcontroller)
module.exports=router;













// const express=require('express');
// const authController=require("../controllers/authController")

// const{registerValidator}=require("../helpers/validator")
// const router=express();
// router.route("/")
// // router.route("/register").post(registerValidator, authController)
// module.exports=router;