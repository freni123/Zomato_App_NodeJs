const mongoose = require("mongoose");

/* ------------------------------ MENU ITEM SCHEMA ------------------------------ */
const menuItemSchema = new mongoose.Schema(
  {
    item_name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
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
const menuItem = mongoose.model("menuItem", menuItemSchema);
module.exports = menuItem;
