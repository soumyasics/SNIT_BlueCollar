const mongoose = require("mongoose");

const workerschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  workertype: {
    type: String,
    required: true,
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
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
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
module.exports = mongoose.model("workers", workerschema);
