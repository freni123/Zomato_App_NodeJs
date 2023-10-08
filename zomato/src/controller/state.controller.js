const { stateService } = require("../services");
/* ------------------------------- STATE CREATE ------------------------------ */
const createState = async (req, res) => {
  try {
    const reqBody = req.body;
    const state = await stateService.createState(reqBody);
    if (!state) {
      throw new Error("state not found!");
    }
    res.status(200).json({
      success: true,
      message: "state created successfully!",
      data: state,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET STATE LIST ----------------------------- */
const getStateList = async (req, res) => {
  try {
    const getList = await stateService.getStateList();
    if (!getList) {
      throw new Error("state not found !");
    }
    res.status(200).json({
      success: true,
      message: "state list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- STATE DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const stateExist = await stateService.getStateById(stateId);
    if (!stateExist) {
      throw new Error("state is not found !");
    }

    await stateService.deleteRecord(stateId);

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
/* ---------------------------- UPDATE USER DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const stateExist = await stateService.getStateById(stateId);
    if (!stateExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await stateService.updateRecord(stateId, req.body);

    res.status(200).json({
      success: true,
      message: "state record updated successfully !",
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
  createState,
  getStateList,
  deleteRecord,
  updateRecord,
};
