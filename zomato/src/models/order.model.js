const mongoose = require("mongoose");

/* ------------------------------ ORDER DETALIS SCHEMA ------------------------------ */
const orderDetalisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
    items: {
      type: mongoose.Types.ObjectId,
      ref: "menuItem",
    },
    totalPrice: {
      type: Number,
    },
    status: {
      type: String,
      trim: true,
    },
    orderDate: {
      type: Date,
      default: Date.now,
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
const Order = mongoose.model("order", orderDetalisSchema);
module.exports = Order;
