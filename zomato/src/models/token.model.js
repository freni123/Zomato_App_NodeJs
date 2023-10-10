const mongoose = require("mongoose");
/* ------------------------------ TOKEN SCHEMA ------------------------------ */
const tokenSchema = new mongoose.Schema(
    {
        token:{
            type:String,
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user",
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);
const Token = mongoose.model("token",tokenSchema);
module.exports = Token;