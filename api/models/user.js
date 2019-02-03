let mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

//User Schema
let userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    select: true
  },
  lastName: {
    type: String,
    required: true,
    select: true
  },
  username: {
    type: String,
    required: true,
    select: true
  },
  type: {
    type: String,
    required: true,
    select: true
  },
  certification: {
    type: String,
    required: true,
    select: true
  },
  verified: {
    trpe: Boolean,
    required: true,
    select: true
  }
});

userSchema.plugin(uniqueValidator);
let User = (module.exports = mongoose.model("User", userSchema));
