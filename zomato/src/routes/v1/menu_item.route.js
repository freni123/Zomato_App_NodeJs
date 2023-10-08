const express = require("express");
const {menuItemController} = require("../../controller");
const {menuItemValidation} = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* ------------------------------- CREATE MEMU-ITEM ------------------------------ */
router.post(
    "/create-menu",
    validate(menuItemValidation.createMenu),
    menuItemController.createMenu
);
/* ------------------------------ GET MEMU-ITEM LIST ----------------------------- */
router.get(
    "/get-menulist",
    menuItemController.getMenuList
);
/* ------------------------------- DELETE MEMU-ITEM ------------------------------ */
router.delete(
    "/delete-menu/:menuId",
    menuItemController.deleteRecord
);
/* ------------------------ MEMU-ITEM RECORDS UPDATE BY ID ----------------------- */
router.put(
    "/update-record/:menuId",
    menuItemController.updateRecord
);
module.exports = router;