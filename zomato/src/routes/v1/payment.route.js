const express = require("express");
const {paymentController} = require("../../controller");
const {paymentValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE PAYMENT ------------------------------ */
router.post(
    "/create-payment",
    validate(paymentValidation.createPayment),
    paymentController.createPayment
);
/* ------------------------------ GET PAYMENT LIST ----------------------------- */
router.get(
    "/get-paymentlist",
    paymentController.getPaymentList
);
/* ------------------------------- DELETE PAYMENT ------------------------------ */
router.delete(
    "/delete-payment/:paymentId",
    paymentController.deleteRecord
);
/* ------------------------ PAYMENT RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:paymentId",
    paymentController.updateRecord
);
module.exports = router;