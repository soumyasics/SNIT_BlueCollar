const express=require('express')
const router=express.Router()

const customer=require("./models/customer/customerController")
const Worker=require("./models/Worker/workerController")
const employer=require("./models/Employer/employerController")
const jobreq=require("./models/customer/PostJob/PostjobController")
const emppostjob=require('./models/Employer/EmpPostJob/EmpPostJobController')
const workeracceptreq=require("./models/customer/Jobrequest/workerJobApprovalControler")
const workstatus=require("./models/Worker/WorkStatus/workStatusController")

// Customer

router.post("/registercust",customer.upload,customer.registercust)
router.post("/logincust",customer.custLogin)
router.post("/verifytoken",customer.verifyToken)
router.post("/custresetpswd/:id",customer.custresetpswd)
router.post("/updatecustprofile/:id",customer.upload,customer.updatecustprofile)
router.post("/viewallcust",customer.viewallcust)
router.post("/viewallactivecust",customer.viewallactivecust)
router.post("/viewcustbyid/:id",customer.viewcustbyid)
router.post("/deletecust/:id",customer.deletecustById)
router.post("/forgotPWDsentMail",customer.forgotPWDsentMail)
router.post("/removebyadminbycustid/:id",customer.removebyadminbycustid)


//Worker

router.post("/registerworker",Worker.upload,Worker.registerworker)
router.post("/loginworker",Worker.workerLogin)
router.post("/workerresetpswd/:id",Worker.workerresetpswd)
router.post("/updateworkerprofile/:id",Worker.upload,Worker.updateworkerprofile)
router.post("/viewallworker",Worker.viewallworker)
router.post("/viewworkerpendingreq",Worker.viewworkerpendingreq)
router.post("/viewworkerbyid/:id",Worker.viewworkerbyid)
router.post("/deleteworkerById/:id",Worker.deleteworkerById)
router.post("/viewworkerreq",Worker.viewworkerreq)
router.post("/approveworkerid/:id",Worker.approveworkerid)
router.post("/rejectworkerbyid/:id",Worker.rejectworkerbyid)
router.post("/removebyadminbyworkerid/:id",Worker.removebyadminbyworkerid)





//Employer

router.post("/employerreg",employer.upload,employer.registeremp)
router.post("/emplogin",employer.empLogin)
router.post("/employerresetpswd/:id",employer.employerresetpswd)
router.post("/updateempprofile/:id",employer.upload,employer.updateempprofile)
router.post("/viewallemployer",employer.viewallemployer)
router.post("/viewemployerpendingreq",employer.viewemployerpendingreq)
router.post("/viewempbyid/:id",employer.viewempbyid)
router.post("/deleteempById/:id",employer.deleteempById)
router.post("/viewemployerreq",employer.viewemployerreq)
router.post("/approveempbyid/:id",employer.approveempbyid)
router.post("/rejectempbyid/:id",employer.rejectempbyid)
router.post("/removebyadminbyempid/:id",employer.removebyadminbyempid)


//EmpPostJob
router.post("/registerjob",emppostjob.registerjob)
router.post("/viewEmpPostJobByEmpid/:id",emppostjob.viewEmpPostJobByEmpid)
router.post("/viewEmpPostJobById/:id",emppostjob.viewEmpPostJobById)
router.post("/viewAllEmpPostJob",emppostjob.viewAllEmpPostJob)




//Job Requests
router.post("/registerjobreq",jobreq.registerjobreq)
router.post("/viewjobreqs/:category",jobreq.viewjobreqs)
router.post("/viewalljobreqs/:id",jobreq.viewalljobreqs)
router.post("/viewjobreqsbyid/:id",jobreq.viewjobreqsbyid)
// router.post("/workeracceptjob/:id",jobreq.workeracceptjob)
router.post("/viewjobreqsbyuserid/:id",jobreq.viewjobreqsbyuserid)
router.post("/viewalljobpost",jobreq.viewalljobpost)


//worker accept job requests
router.post("/workeracceptjobs/:id",workeracceptreq.workertakejobreq)
router.post("/viewReqsbyUserid/:id",workeracceptreq.viewReqsbyUserid)
router.post("/viewReqsbyJobid/:id",workeracceptreq.viewReqsbyJobid)
router.post("/viewReqsbyWorkerid/:id",workeracceptreq.viewReqsbyWorkerid)
router.post("/acceptReqsById/:id",workeracceptreq.acceptReqsById)
router.post("/viewApprovedReqsbyJobId/:id",workeracceptreq.viewApprovedReqsbyJobId)
router.post("/viewApprovedReqsbyWorkerid/:id",workeracceptreq.viewApprovedReqsbyWorkerid)
router.post("/viewApprovedReqsbycustomerId/:id",workeracceptreq.viewApprovedReqsbycustomerId)

// work status 
router.post("/addworkstatus/:id",workstatus.addworkstatus)


module.exports=router