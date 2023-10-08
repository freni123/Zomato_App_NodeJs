const { countryService } = require("../services");
/* ------------------------------- COUNTRY CREATE ------------------------------ */
const createCountry = async (req, res) => {
  try {
    const reqBody = req.body;
    const country = await countryService.createCountry(reqBody);
    if (!country) {
      throw new Error("country not found!");
    }
    res.status(200).json({
      success: true,
      message: "country created successfully!",
      data: country,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET COUNTRY LIST ----------------------------- */
const getCountryList = async (req, res) => {
  try {
    const getList = await countryService.getCountryList();
    if (!getList) {
      throw new Error("country not found !");
    }
    res.status(200).json({
      success: true,
      message: "country list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- COUNTRY DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    const countryExist = await countryService.getCountryById(countryId);
    if (!countryExist) {
      throw new Error("country is not found !");
    }

    await countryService.deleteRecord(countryId);

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
/* ---------------------------- UPDATE COUNTRY DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    const countryExist = await countryService.getCountryById(countryId);
    if (!countryExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await countryService.updateRecord(countryId, req.body);

    res.status(200).json({
      success: true,
      message: "country record updated successfully !",
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
  createCountry,
  getCountryList,
  deleteRecord,
  updateRecord,
};
