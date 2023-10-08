const { cityService } = require("../services");
/* ------------------------------- CITY CREATE ------------------------------ */
const createCity = async (req, res) => {
  try {
    const reqBody = req.body;
    const city = await cityService.createCity(reqBody);
    if (!city) {
      throw new Error("city not found!");
    }
    res.status(200).json({
      success: true,
      message: "city created successfully!",
      data: city,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET CITY LIST ----------------------------- */
const getCityList = async (req, res) => {
  try {
    const getList = await cityService.getCityList();
    if (!getList) {
      throw new Error("city not found !");
    }
    res.status(200).json({
      success: true,
      message: "city list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- CITY DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const cityExist = await cityService.getCityById(cityId);
    if (!cityExist) {
      throw new Error("city is not found !");
    }

    await cityService.deleteRecord(cityId);

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
/* ---------------------------- UPDATE CITY DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const cityExist = await cityService.getCityById(cityId);
    if (!cityExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await cityService.updateRecord(cityId, req.body);

    res.status(200).json({
      success: true,
      message: "city record updated successfully !",
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
  createCity,
  getCityList,
  deleteRecord,
  updateRecord,
};
