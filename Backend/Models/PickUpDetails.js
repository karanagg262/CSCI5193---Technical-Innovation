const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.mongodb.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const PickUpSchema = new mongoose.Schema({
  contact: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
   required: true
  },
//   dateCreated: {
//     type: Date,
//     default: Date.now,
//   },
  description: {
    type: String,
  }, 

},
  { strict: false },
);



module.exports = mongoose.models.PickUpSchema || mongoose.model("PickUpDetails", PickUpSchema)