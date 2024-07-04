const jobreqschema = require("./PostjobSchema");


const registerjobreq = (req, res) => {
  const work = new jobreqschema({
    custid:req.body.custid,
    date:new Date(),
    jobname:req.body.jobname,
    workdetails:req.body.workdetails,

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

const viewjobreqs=((req,res)=>{
  jobreqschema.find({jobreqstatus:"pending"})
  .populate("custid")
  .exec()
  .then((data) => {
    res.json({
      status: 200,
      msg: "Data get Successfully",
      data: data,
    });
  })
  .catch((err) => {
      res.json({
          status:500,
          err:err
      })
  });

})

const viewjobreqsbyid=((req,res)=>{
  jobreqschema.findById({_id:req.params.id})
  .populate("custid")
  .exec()
  .then((data) => {
    res.json({
      status: 200,
      msg: "Data get Successfully",
      data: data,
    });
  })
  .catch((err) => {
      res.json({
          status:500,
          err:err
      })
  });

})

const workeracceptjob=((req,res)=>{
  jobreqschema.findByIdAndUpdate({_id:req.params.id},{
    workerid:req.body.workerid,
    workdate:req.body.workdate,
    jobreqstatus:"accepted"
  })
  .populate("custid")
  .exec()
  .then((data) => {
    res.json({
      status: 200,
      msg: "Data get Successfully",
      data: data,
    });
  })
  .catch((err) => {
      res.json({
          status:500,
          err:err
      })
  });

})

const viewjobreqsbyuserid=((req,res)=>{
  jobreqschema.find({custid:req.params.id})
  .populate("workerid")
  .exec()
  .then((data) => {
    res.json({
      status: 200,
      msg: "Data get Successfully",
      data: data,
    });
  })
  .catch((err) => {
      res.json({
          status:500,
          err:err
      })
  });

})


module.exports={
    registerjobreq,
    viewjobreqs,
    viewjobreqsbyid,
    workeracceptjob,
    viewjobreqsbyuserid
}