const {check}=require('express-validator')

 registerValidator=[
    check('name',"Name is required").not().isEmpty(),
    check('email',"Please include a valid email").isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password',"Password is required").not().isEmpty()
]
module.exports={
    registerValidator
}