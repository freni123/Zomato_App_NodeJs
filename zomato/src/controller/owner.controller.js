const { ownerService } = require("../services");
/* ------------------------------- OWNER CREATE ------------------------------ */
const createOwner = async (req, res) => {
  try {
    const reqBody = req.body;
    const owner = await ownerService.createOwner(reqBody);
    if (!owner) {
      throw new Error("owner not found!");
    }
    res.status(200).json({
      success: true,
      message: "owner created successfully!",
      data: owner,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET OWNER LIST ----------------------------- */
const getOwnerList = async (req, res) => {
  try {
    const getList = await ownerService.getOwnerList();
    if (!getList) {
      throw new Error("owner not found !");
    }
    res.status(200).json({
      success: true,
      message: "owner list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- OWNER DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const ownerExist = await ownerService.getOwnerById(ownerId);
    if (!ownerExist) {
      throw new Error("owner is not found !");
    }

    await ownerService.deleteRecord(ownerId);

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
/* ---------------------------- UPDATE OWNER DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const ownerExist = await ownerService.getOwnerById(ownerId);
    if (!ownerExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await ownerService.updateRecord(ownerId, req.body);

    res.status(200).json({
      success: true,
      message: "owner record updated successfully !",
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
  createOwner,
  getOwnerList,
  deleteRecord,
  updateRecord,
};
