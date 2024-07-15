const mongoose= require("mongoose");

const schema=mongoose.Schema({
    custid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers",
        required: true,
    },
    jobname:{
        type:String,
        required:true
    },
    workdetails:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        required: true
    },
    jobreqstatus:{
        type:String,
        default:"pending"
    },
    jobacceptstatus:{
        type:String,
        default:"pending"
    },

    // workdate:{
    //     type:String,
    //     default:null
    // },
    workers: [{
        workerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "workers",
          required: true,
        },
        workDate: {
          type: String,
          required: true,
        }
      }],
    });
module.exports = mongoose.model('jobrequests', schema);

