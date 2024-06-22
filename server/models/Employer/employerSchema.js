const mongoose = require("mongoose");

const employerschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  empid: {
    type: String,
    required: true,
    required: true,
    dropDups: true,

  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    unique: true,
    required: true,

    dropDups: true,
  },
  location: {
    type: String,
    required: true,
  },
  // city: {
  //   type: String,
  //   required: true,
  // },
  // state: {
  //   type: String,
  //   required: true,
  // },
  email: {
    type: String,
    unique: true,
    required: true,

    dropDups: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
  },
});
module.exports = mongoose.model("employer", employerschema);
