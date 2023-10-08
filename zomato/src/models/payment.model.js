const mongoose = require("mongoose")
/* ------------------------------ PAYMENT SCHEMA ------------------------------ */
const paymentSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user",
        },
        order:{
            type:mongoose.Types.ObjectId,
            ref:"order",
        },
        amount:{
            type:Number,
        },
        paymentMethod:{
            type:String,
        },
        transactionID:{
            type:String,
        },
        status:{
            type:String,
            trim:true,
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
const Payement = mongoose.model("payement",paymentSchema);
module.exports = Payement;