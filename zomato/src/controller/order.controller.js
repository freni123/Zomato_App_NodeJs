const { orderService } = require("../services");
/* ------------------------------- ORDER CREATE ------------------------------ */
const createOrder = async (req, res) => {
  try {
    const reqBody = req.body;
    const order = await orderService.createOrder(reqBody);
    if (!order) {
      throw new Error("order not found!");
    }
    res.status(200).json({
      success: true,
      message: "order created successfully!",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET ORDER LIST ----------------------------- */
const getOrderList = async (req, res) => {
  try {
    const getList = await orderService.getOrderList();
    if (!getList) {
      throw new Error("order not found !");
    }
    res.status(200).json({
      success: true,
      message: "order list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- ORDER DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExist = await orderService.getOrderById(orderId);
    if (!orderExist) {
      throw new Error("order is not found !");
    }

    await orderService.deleteRecord(orderId);

    res.status(200).json({
      success: true,
      message: "Record deleted successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- UPDATE ORDER DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExist = await orderService.getOrderById(orderId);
    if (!orderExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await orderService.updateRecord(orderId, req.body);

    res.status(200).json({
      success: true,
      message: "order record updated successfully !",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createOrder,
  getOrderList,
  deleteRecord,
  updateRecord,
};
