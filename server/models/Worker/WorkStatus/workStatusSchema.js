const mongoose = require("mongoose");

const schema = mongoose.Schema({
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
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
  },
  otp: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("workstatus", schema);
