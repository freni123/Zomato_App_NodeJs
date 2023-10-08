const mongoose = require("mongoose");

/* ------------------------------- NOTIFICATION SCHEMA ------------------------------ */
const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
    message: {
      type: String,
      trim: true,
    },
    date:{
      type:Date,
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
const Notification = mongoose.model("notification", notificationSchema);
module.exports = Notification;
