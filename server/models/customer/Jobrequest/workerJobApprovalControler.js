const workerapproveschema = require("./workerJobApprovalSchema.js");
const PostjobSchema=require("../PostJob/PostjobSchema.js")


const workertakejobreq =async (req, res) => {
    
    let datas=await workerapproveschema.findOne({jobid:req.params.id, workerId:req.body.workerId})
if(datas){
  return   res.json({
    status: 400,
    msg: "You have already applied for this job"
  });
}
  const work = new workerapproveschema({
    jobid:req.params.id,
    workerId:req.body.workerId,
    workDate:req.body.workDate,
    customerId:req.body.customerId
  });
  await work
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted Successfully",
        data: data,
      });
    })
    .catch((err) => {
        res.json({
            status:500,
            err:err
        })
    });

};


const viewReqsbyUserid=(req,res)=>{
    workerapproveschema.find({customerId:req.params.id})
    .populate("workerId")
    .populate("jobid")
    .exec()
    .then((data) => {
        res.json({
          status: 200,
          msg: "Obtained Successfully",
          data: data,
        });
      })
      .catch((err) => {
          res.json({
              status:500,
              err:err
          })
      });
  
}



const viewReqsbyJobid=(req,res)=>{
    workerapproveschema.find({jobid:req.params.id,approvalstatus:'pending'})
    .populate("workerId")
    .populate("jobid")
    .exec()
    .then((data) => {
        res.json({
          status: 200,
          msg: "Obtained Successfully",
          data: data,
        });
      })
      .catch((err) => {
          res.json({
              status:500,
              err:err
          })
      });
  
}

const viewReqsbyWorkerid=(req,res)=>{
    workerapproveschema.find({workerId:req.params.id})
    .populate("customerId jobid")
    .exec()
    .then((data) => {
        res.json({
          status: 200,
          msg: "Obtained Successfully",
          data: data,
        });
      })
      .catch((err) => {
          res.json({
              status:500,
              err:err
          })
      });
  
}


const acceptReqsById=async(req,res)=>{
  let datas= await workerapproveschema.findById({_id:req.params.id})

  await workerapproveschema.findByIdAndUpdate({_id:req.params.id},{approvalstatus:'accepted'})
  

  
  
  .exec()
  .then((data) => {
      res.json({
        status: 200,
        msg: "Worker Accepted",
        data: data,
      });
    })
    .catch((err) => {
        res.json({
            status:500,
            err:err
        })
    });

    let ss=await workerapproveschema.updateMany({jobid:datas.jobid,approvalstatus:'pending'},{approvalstatus:'rejected'})
    console.log(ss);

}


const viewApprovedReqsbyWorkerid=(req,res)=>{
  workerapproveschema.find({workerId:req.params.id,approvalstatus:'accepted'})
  .populate("customerId jobid")
  .exec()
  .then((data) => {
      res.json({
        status: 200,
        msg: "Obtained Successfully",
        data: data,
      });
    })
    .catch((err) => {
        res.json({
            status:500,
            err:err
        })
    });

}


const viewApprovedReqsbyJobId=(req,res)=>{
  workerapproveschema.find({jobid:req.params.id,approvalstatus:'accepted'})
  .populate("customerId workerId")
  .exec()
  .then((data) => {
      res.json({
        status: 200,
        msg: "Obtained Successfully",
        data: data,
      });
    })
    .catch((err) => {
        res.json({
            status:500,
            err:err
        })
    });

}

const viewApprovedReqsbycustomerId=(req,res)=>{
  workerapproveschema.find({customerId:req.params.id,approvalstatus:'accepted'})
  .populate("workerId jobid")
  .exec()
  .then((data) => {
      res.json({
        status: 200,
        msg: "Obtained Successfully",
        data: data,
      });
    })
    .catch((err) => {
        res.json({
            status:500,
            err:err
        })
    });
  }

  const viewAprovdReqsbycustIdRegComplaint=(req,res)=>{
    workerapproveschema.find({customerId:req.params.id,complaintstatus:false})
    .populate("workerId jobid")
    .exec()
    .then((data) => {
        res.json({
          status: 200,
          msg: "Obtained Successfully",
          data: data,
        });
      })
      .catch((err) => {
          res.json({
              status:500,
              err:err
          })
      });
    }

  const updateapprovalstatustopaid=async(req,res)=>{
    await workerapproveschema.findByIdAndUpdate({_id:req.params.id},{approvalstatus:'paid'})
    .exec()
    .then((data) => {
        res.json({
          status: 200,
          msg: "Updated",
          data: data,
        });
      })
      .catch((err) => {
          res.json({
              status:500,
              err:err
          })
      });
  }

module.exports={
    workertakejobreq,
    viewReqsbyJobid,
    viewReqsbyUserid,
    viewReqsbyWorkerid,
    acceptReqsById,
    viewApprovedReqsbyJobId,
    viewApprovedReqsbyWorkerid,
    viewApprovedReqsbycustomerId,
    updateapprovalstatustopaid,
    viewAprovdReqsbycustIdRegComplaint
}