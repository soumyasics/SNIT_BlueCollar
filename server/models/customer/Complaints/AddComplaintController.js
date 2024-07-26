const complaintschema=require('./ComplaintSchema')

// customer Add Complaints

const customerAddComplaints=((req,res)=>{
    const complaints= new complaintschema({
        workerId:req.params.id,
        customerId:req.body.customerId,
        subject:req.body.subject,
        against:'worker'
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

// Worker Add Complaints

const workerAddComplaints=((req,res)=>{
    const complaints= new complaintschema({
        customerId:req.params.id,
        workerId:req.body.workerId,
        subject:req.body.subject,
        against:'customer'
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

// view   Complaint By Id

const viewcomplaintById=((req,res)=>{
    complaintschema.findById({_id:req.params.id})
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

// view all worker complaints to admin

const viewallworkercomplaintsinadmin=((req,res)=>{
    complaintschema.find({against:'customer'})
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

// view all customer complaints to admin

const viewallcustomercomplaintsinadmin=((req,res)=>{
    complaintschema.find({against:'worker'})
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
    workerAddComplaints,
    viewComplaintByWorkerId,
    viewallworkercomplaintsinadmin,
    viewallcustomercomplaintsinadmin,
    viewcomplaintById
}