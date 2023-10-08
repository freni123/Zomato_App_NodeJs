const { adminService } = require("../services");
/* ------------------------------- ADMIN CREATE ------------------------------ */
const createAdmin = async (req, res) => {
  try {
    const reqBody = req.body;
    const admin = await adminService.createAdmin(reqBody);
    if (!admin) {
      throw new Error("admin not found!");
    }
    res.status(200).json({
      success: true,
      message: "admin created successfully!",
      data: admin,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET ADMIN LIST ----------------------------- */
const getAdminList = async (req, res) => {
  try {
    const getList = await adminService.getAdminList();
    if (!getList) {
      throw new Error("admin not found !");
    }
    res.status(200).json({
      success: true,
      message: "admin list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- ADMIN DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const adminExist = await adminService.getAdminById(adminId);
    if (!adminExist) {
      throw new Error("admin is not found !");
    }

    await adminService.deleteRecord(adminId);

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
/* ---------------------------- UPDATE ADMIN DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const adminExist = await adminService.getAdminById(adminId);
    if (!adminExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await adminService.updateRecord(adminId, req.body);

    res.status(200).json({
      success: true,
      message: "admin record updated successfully !",
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
  createAdmin,
  getAdminList,
  deleteRecord,
  updateRecord,
};
