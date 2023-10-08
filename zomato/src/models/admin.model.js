const mongoose = require("mongoose");

/* ------------------------------ ADMIN SCHEMA ------------------------------ */
const adminSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
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
const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
