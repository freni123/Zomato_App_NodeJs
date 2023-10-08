const mongoose = require("mongoose")
/* ------------------------------ OWNER SCHEMA ------------------------------ */
const ownerSchema = new mongoose.Schema(
    {
        owner_name:{
            type:String,
            trim:true,
        },
        owner_phoneno:{
            type:Number,
        },
        owner_email:{
            type:String,
            trim:true,
        },
        restaurant_name:{
            type:mongoose.Types.ObjectId,
            ref:"restaurant",
        },
        is_active:{
            type:Boolean,
            default: true,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);
const Owner = mongoose.model("owner",ownerSchema);
module.exports = Owner;