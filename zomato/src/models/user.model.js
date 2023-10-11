const mongoose = require("mongoose");

/* ------------------------------- USER SCHEMA ------------------------------ */
const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
    },
    phone_no: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    country: {
      type:mongoose.Types.ObjectId,
      ref:"country",
    },
    address: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const User = mongoose.model("user", userSchema);
module.exports = User;
