const mongoose=require('mongoose')

const schema=mongoose.Schema({
    jobid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jobrequests",
        required: true,
      },
      workerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "workers",
        required: true,
      },
      approvalstatus: {
        type: String,
        default: "pending",
      },
      date:{
        type:Date,
        default:new Date()
      }
})

module.exports=mongoose.model("empjobrequest",schema)