const { Router } = require("express");
const registeredUser = require("../controller/user.controller");

const upload=require('../middleware/multer.js')

const router=Router()

router.route('/register').post(upload.fields([
    {
        name:'avatar',
        maxCount:1
    },
    {
        name:'coverImage',
        maxCount:1
    }
]),registeredUser)

module.exports=router