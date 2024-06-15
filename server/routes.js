const express=require('express')
const router=express.Router()

const customer=require("./models/customer/customerController")
const Worker=require("./models/Worker/workerController")

router.post("/registercust",customer.upload,customer.registercust)
router.post("/logincust",customer.custLogin)
router.post("/verifytoken",customer.verifyToken)
router.post("/custforgetpswd",customer.custforgetpswd)
router.post("/updatecustprofile/:id",customer.upload,customer.updatecustprofile)
router.post("/viewallcust",customer.viewallcust)
router.post("/viewcustbyid/:id",customer.viewcustbyid)
router.post("/deletecust/:id",customer.deletecustById)
router.post("/forgotPWDsentMail",customer.forgotPWDsentMail)


router.post("/registerworker",Worker.upload,Worker.registerworker)
router.post("/loginworker",Worker.workerLogin)
router.post("/workerforgetpswd",Worker.workerforgetpswd)


module.exports=router