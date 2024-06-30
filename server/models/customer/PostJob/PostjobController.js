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

module.exports={
    registerjobreq
}