const workstatusschema = require("./workStatusSchema.js");


const addworkstatus = (req, res) => {
  const workstatus = new workstatusschema({
    jobid:req.params.id,
    workerId:req.body.workerId,
    customerId:req.body.customerId,
    status:'completed',
    payment:req.body.payment,
    otp:req.body.otp,

  });
  workstatus
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted Successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
        res.json({
            status:500,
            err:err
        })
    });
};

module.exports={
    addworkstatus
}