const { menuItemService } = require("../services");
/* ------------------------------- MENU-ITEM CREATE ------------------------------ */
const createMenu = async (req, res) => {
  try {
    const reqBody = req.body;
    const menu = await menuItemService.createMenu(reqBody);
    if (!menu) {
      throw new Error("menuItem not found!");
    }
    res.status(200).json({
      success: true,
      message: "menuItem created successfully!",
      data: menu,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET MENU-ITEM LIST ----------------------------- */
const getMenuList = async (req, res) => {
  try {
    const getList = await menuItemService.getMenuList();
    if (!getList) {
      throw new Error("menuItem not found !");
    }
    res.status(200).json({
      success: true,
      message: "menuItem list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- MENU-ITEM DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const menuId = req.params.menuId;
    const menuExist = await menuItemService.getMenuById(menuId);
    if (!menuExist) {
      throw new Error("menuItem is not found !");
    }

    await menuItemService.deleteRecord(menuId);

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
/* ---------------------------- UPDATE MENU-ITEM DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const menuId = req.params.menuId;
    const menuExist = await menuItemService.getMenuById(menuId);
    if (!menuExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await menuItemService.updateRecord(menuId, req.body);

    res.status(200).json({
      success: true,
      message: "menuItem record updated successfully !",
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
  createMenu,
  getMenuList,
  deleteRecord,
  updateRecord,
};
