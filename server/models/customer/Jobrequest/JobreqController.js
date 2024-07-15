const workerapproveschema = require("./JobrequestSchema");


const workertakejobreq = (req, res) => {
  const work = new workerapproveschema({
    jobid:req.params.id,
    workerId:req.body.workerid,
    workDate:req.body.workDate,
    customerId:req.body.customerId
  });
  work
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
    workerapproveschema.find({jobid:req.params.id})
    .populate("workerId")
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
module.exports={
    workertakejobreq,
    viewReqsbyJobid,
    viewReqsbyUserid,
    viewReqsbyWorkerid
}