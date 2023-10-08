const express = require("express");
const {orderController} = require("../../controller");
const {orderValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE ORDER ------------------------------ */
router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
);
/* ------------------------------ GET ORDER LIST ----------------------------- */
router.get(
    "/get-orderlist",
    orderController.getOrderList
);
/* ------------------------------- DELETE ORDER ------------------------------ */
router.delete(
    "/delete-order/:orderId",
    orderController.deleteRecord
);
/* ------------------------ ORDER RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:orderId",
    orderController.updateRecord
);
module.exports = router;