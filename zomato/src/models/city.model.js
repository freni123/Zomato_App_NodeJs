const mongoose = require("mongoose");

/* ------------------------------- CITY SCHEMA ------------------------------ */
const citySchema = new mongoose.Schema(
  {
    city_name: {
      type: String,
      trim: true,
    },
    state: {
      type: mongoose.Types.ObjectId,
      ref: "state",
    },
    country: {
      type: mongoose.Types.ObjectId,
      ref: "country",
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
const City = mongoose.model("city", citySchema);
module.exports = City;
