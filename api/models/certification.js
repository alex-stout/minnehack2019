let mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

//Certification Schema
let certificationSchema = mongoose.Schema({
  millName: {
    type: String,
    required: true,
    select: true
  },
  millLatitude: {
    type: String,
    required: true,
    select: true
  },
  millLongitude: {
    type: String,
    required: true,
    select: true
  },
  RSPOCertified: {
    type: Boolean,
    required: true,
    select: true
  },
  outReachPrograms: {
    type: Boolean,
    required: true,
    select: true
  },
  noDeforestStationPolicy: {
    type: Boolean,
    required: true,
    select: true
  },
  responsibilitySourcingPolicy: {
    trpe: Boolean,
    required: true,
    select: true
  }
});

certificationSchema.plugin(uniqueValidator);
let Certification = (module.exports = mongoose.model(
  "Certification",
  certificationSchema
));
