const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.mongodb.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ContactRequestSchema = new mongoose.Schema({
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
  describe: {
    type: String,
  }

},
  { strict: false },
);



module.exports = mongoose.models.ContactRequestSchema || mongoose.model("ContactRequests", ContactRequestSchema)