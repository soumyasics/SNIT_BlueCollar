const express=require('express')
const router=express.Router()

const customer=require("./models/customer/customerController")

router.post("/registercust",customer.upload,customer.registercust)
router.post("/logincust",customer.custLogin)
router.post("/verifytoken",customer.verifyToken)
router.post("/custforgetpswd",customer.custforgetpswd)
router.post("/updatecustprofile/:id",customer.upload,customer.updatecustprofile)
router.post("/viewallcust",customer.viewallcust)
router.post("/viewcustbyid/:id",customer.viewcustbyid)
router.post("/deletecust/:id",customer.deletecustById)


module.exports=router