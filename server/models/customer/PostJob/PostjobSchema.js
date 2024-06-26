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
    }
 
});
module.exports = mongoose.model('jobrequests', schema);

