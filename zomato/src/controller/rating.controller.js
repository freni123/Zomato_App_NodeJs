const { ratingService } = require("../services");
/* ------------------------------- RATING CREATE ------------------------------ */
const createRating = async (req, res) => {
  try {
    const reqBody = req.body;
    const rating = await ratingService.createRating(reqBody);
    if (!rating) {
      throw new Error("rating not found!");
    }
    res.status(200).json({
      success: true,
      message: "rating created successfully!",
      data: rating,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET RATING LIST ----------------------------- */
const getRatingList = async (req, res) => {
  try {
    const getList = await ratingService.getRatingList();
    if (!getList) {
      throw new Error("rating not found !");
    }
    res.status(200).json({
      success: true,
      message: "rating list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- RATING DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const ratingId = req.params.ratingId;
    const ratingExist = await ratingService.getRatingById(ratingId);
    if (!ratingExist) {
      throw new Error("rating is not found !");
    }

    await ratingService.deleteRecord(ratingId);

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
/* ---------------------------- UPDATE RATING DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const ratingId = req.params.ratingId;
    const ratingExist = await ratingService.getRatingById(ratingId);
    if (!ratingExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await ratingService.updateRecord(ratingId, req.body);

    res.status(200).json({
      success: true,
      message: "rating record updated successfully !",
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
  createRating,
  getRatingList,
  deleteRecord,
  updateRecord,
};
