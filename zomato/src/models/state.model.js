const mongoose = require("mongoose");
/* ------------------------------ STATE SCHEMA ------------------------------ */
const stateSchema = new mongoose.Schema(
  {
    state_name: {
      type: String,
      trim: true,
    },
    country_name: {
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
const State = mongoose.model("state", stateSchema);
module.exports = State;
