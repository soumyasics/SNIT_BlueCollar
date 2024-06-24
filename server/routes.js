const express=require('express')
const router=express.Router()

const customer=require("./models/customer/customerController")
const Worker=require("./models/Worker/workerController")
const employer=require("./models/Employer/employerController")

// Customer

router.post("/registercust",customer.upload,customer.registercust)
router.post("/logincust",customer.custLogin)
router.post("/verifytoken",customer.verifyToken)
router.post("/custresetpswd/:id",customer.custresetpswd)
router.post("/updatecustprofile/:id",customer.upload,customer.updatecustprofile)
router.post("/viewallcust",customer.viewallcust)
router.post("/viewcustbyid/:id",customer.viewcustbyid)
router.post("/deletecust/:id",customer.deletecustById)
router.post("/forgotPWDsentMail",customer.forgotPWDsentMail)

//Worker

router.post("/registerworker",Worker.upload,Worker.registerworker)
router.post("/loginworker",Worker.workerLogin)
router.post("/workerresetpswd/:id",Worker.workerresetpswd)
router.post("/updateworkerprofile/:id",Worker.upload,Worker.updateworkerprofile)
router.post("/viewallworker",Worker.viewallworker)
router.post("/viewworkerbyid/:id",Worker.viewworkerbyid)
router.post("/deleteworkerById/:id",Worker.deleteworkerById)


//Employer

router.post("/employerreg",employer.upload,employer.registeremp)
router.post("/emplogin",employer.empLogin)
router.post("/employerresetpswd/:id",employer.employerresetpswd)
router.post("/updateempprofile/:id",employer.upload,employer.updateempprofile)
router.post("/viewallemployer",employer.viewallemployer)
router.post("/viewempbyid/:id",employer.viewempbyid)
router.post("/deleteempById/:id",employer.deleteempById)





module.exports=router