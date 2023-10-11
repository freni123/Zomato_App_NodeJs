const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

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
      type: mongoose.Types.ObjectId,
      ref: "country",
    },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
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
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = bcrypt.hash(user.password, 8);
  }
  next();
});
const User = mongoose.model("user", userSchema);
module.exports = User;
