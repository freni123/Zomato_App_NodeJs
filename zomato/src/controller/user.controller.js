const { userService } = require("../services");
/* ------------------------------- USER CREATE ------------------------------ */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("user not found!");
    }
    res.status(200).json({
      success: true,
      message: "user created successfully!",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET USER LIST ----------------------------- */
const getUserList = async (req, res) => {
  try {
    const getList = await userService.getUserList();
    if (!getList) {
      throw new Error("user not found !");
    }
    res.status(200).json({
      success: true,
      message: "user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- USER DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExist = await userService.getUserById(userId);
    if (!userExist) {
      throw new Error("user is not found !");
    }

    await userService.deleteRecord(userId);

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
    const userId = req.params.userId;
    const userExist = await userService.getUserById(userId);
    if (!userExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await userService.updateRecord(userId, req.body);

    res.status(200).json({
      success: true,
      message: "user record updated successfully !",
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
  createUser,
  getUserList,
  deleteRecord,
  updateRecord,
};
