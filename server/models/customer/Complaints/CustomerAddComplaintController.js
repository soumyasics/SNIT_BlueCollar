const complaintschema=require('./CustomerAddComplaintSchema')

// customer Add Complaints

const customerAddComplaints=((req,res)=>{
    const complaints= new complaintschema({
        workerId:req.params.id,
        customerId:req.body.customerId,
        suspectName:req.body.suspectName,
        subject:req.body.subject
    })
    complaints.save()
    .then((data)=>{
        res.json({
            status:200,
            msg:"Complaint Registered Successfully",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            status:500,
            msg:"Something went Wrong",
            err:err
        })
    });

});

// view Worker By  Complaint Id

const viewComplaintByWorkerId=((req,res)=>{
    complaintschema.find({workerId:req.params.id})
    .populate("customerId")
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
});

// view all complaints to admin

const viewallcomplaintstoadmin=((req,res)=>{
    complaintschema.find()
    .populate("customerId")
    .populate("workerId")
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
    customerAddComplaints,
    viewComplaintByWorkerId,
    viewallcomplaintstoadmin
}