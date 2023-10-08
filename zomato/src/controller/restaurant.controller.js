const { restaurantService } = require("../services");
/* -------------------------------  USER RESTAURANT CREATE ------------------------------ */
const createRestaurant = async (req, res) => {
  try {
    const reqBody = req.body;
    const restaurant = await restaurantService.createRestaurant(reqBody);
    if (!restaurant) {
      throw new Error("restaurant not found!");
    }
    res.status(200).json({
      success: true,
      message: "restaurant created successfully!",
      data: restaurant,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ------------------------------ GET RESTAURANT LIST ----------------------------- */
const getRestaurantList = async (req, res) => {
  try {
    const getList = await restaurantService.getRestaurantList();
    if (!getList) {
      throw new Error("restaurant not found !");
    }
    res.status(200).json({
      success: true,
      message: "restaurant list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/* ---------------------------- RESTAURANT DATA DELETE ---------------------------- */
const deleteRecord = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExist = await restaurantService.getRestaurantById(
      restaurantId
    );
    if (!restaurantExist) {
      throw new Error("restaurant is not found !");
    }

    await restaurantService.deleteRecord(restaurantId);

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
/* ---------------------------- UPDATE RESTAURANT DATA ---------------------------- */
const updateRecord = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExist = await restaurantService.getRestaurantById(
      restaurantId
    );
    if (!restaurantExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await restaurantService.updateRecord(
      restaurantId,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "restaurant record updated successfully !",
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
  createRestaurant,
  getRestaurantList,
  deleteRecord,
  updateRecord,
};
