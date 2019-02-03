let mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

//Certification Schema
let transactionSchema = mongoose.Schema({
  shipmentID: {
    type: String,
    required: true,
    select: true
  },
  timestamp: {
    type: Date,
    required: true,
    select: true
  },
  giverID: {
    type: String,
    required: true,
    select: true
  },
  receiverID: {
    type: String,
    required: true,
    select: true
  },
  locationID: {
    type: String,
    required: true,
    select: true
  },
  weight: {
    trpe: Number,
    required: true,
    select: true
  }
});

certificationSchema.plugin(uniqueValidator);
let Certification = (module.exports = mongoose.model(
  "Certification",
  certificationSchema
));
