const mongoose = require("mongoose");
/* ------------------------------ CATEGORY SCHEMA ------------------------------ */
const categorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      trim: true,
    },
    category_desc: {
      type: String,
      trim: true,
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
const Category = mongoose.model("category", categorySchema);
module.exports = Category;
