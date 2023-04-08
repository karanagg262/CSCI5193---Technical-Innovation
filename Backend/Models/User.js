const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

UserSchema.method("transform", function () {
  let dataObject = this.toObject();
  dataObject.ingredientId = dataObject._id;
  Reflect.deleteProperty(dataObject, "_id");
  return dataObject;
});

module.exports = mongoose.model("User", UserSchema);
