const { paymentService } = require("../services");
/* ------------------------------- USER PAYMENT CREATE ------------------------------ */
const createPayment = async (req, res) => {
  try {
    const reqBody = req.body;
    const payment = await paymentService.createPayment(reqBody);
    if (!payment) {
      throw new Error("payment not found!");
    }
    res.status(200).json({
      success: true,
      message: "payment created successfully!",
      data: payment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET USER PAYMENT LIST ----------------------------- */
const getPaymentList = async (req, res) => {
  try {
    const getList = await paymentService.getPaymentList();
    if (!getList) {
      throw new Error("payment not found !");
    }
    res.status(200).json({
      success: true,
      message: "payment list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- USER PAYMENT DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    const paymentExist = await paymentService.getPaymentById(paymentId);
    if (!paymentExist) {
      throw new Error("payment is not found !");
    }

    await paymentService.deleteRecord(paymentId);

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
/* ---------------------------- UPDATE USER PAYMNENT DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    const paymentExist = await paymentService.getPaymentById(paymentId);
    if (!paymentExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await paymentService.updateRecord(paymentId, req.body);

    res.status(200).json({
      success: true,
      message: "payment record updated successfully !",
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
  createPayment,
  getPaymentList,
  deleteRecord,
  updateRecord,
};
