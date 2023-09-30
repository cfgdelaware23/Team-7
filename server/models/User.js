import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  snap: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: Number
  },
  email: {
    type: String,
    required: true,
  },
  purchases: [{
    type: String
  }]
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };

