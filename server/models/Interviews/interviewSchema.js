const mongoose = require("mongoose");

const schema = mongoose.Schema({

  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "workers",
    required: true,
  },
 
  status: {
    type: String,
    required: true,
  },
  jobRequestId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "empjobrequest",
    required: true,
  },
  empId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employers",
  },
  date:{
    type: Date,
    required: true,
  },
  loc:{
    type: String,
    required: true,
  },
  city:{
    type: String,
    required: true,
  },
  state:{
    type: String,
    required: true,
  }

});
module.exports = mongoose.model("interviews", schema);
