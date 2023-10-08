const { reviewService } = require("../services");
/* -------------------------------  USER REVIEW CREATE ------------------------------ */
const createReview = async (req, res) => {
  try {
    const reqBody = req.body;
    const review = await reviewService.createReview(reqBody);
    if (!review) {
      throw new Error(" user review not found!");
    }
    res.status(200).json({
      success: true,
      message: "user review created successfully!",
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET USER REVIEW LIST ----------------------------- */
const getReviewList = async (req, res) => {
  try {
    const getList = await reviewService.getReviewList();
    if (!getList) {
      throw new Error("user review not found !");
    }
    res.status(200).json({
      success: true,
      message: "user review list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- USER REVIEW DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const reviewExist = await reviewService.getReviewById(reviewId);
    if (!reviewExist) {
      throw new Error("user review is not found !");
    }

    await reviewService.deleteRecord(reviewId);

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
/* ---------------------------- UPDATE REVIEW DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const reviewExist = await reviewService.getReviewById(reviewId);
    if (!reviewExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await reviewService.updateRecord(reviewId, req.body);

    res.status(200).json({
      success: true,
      message: "review record updated successfully !",
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
  createReview,
  getReviewList,
  deleteRecord,
  updateRecord,
};
