const express = require("express");
const userRoute = require("./user.route");
const stateRoute = require("./state.route");
const reviewRoute = require("./review.route");
const restaurantRoute = require("./restaurant.route");
const ratingRoute = require("./rating.route");
const paymentRoute = require("./payment.route");
const ownerRoute = require("./owner.route");
const orderRoute = require("./order.route");
const notificationRoute = require("./notification.route");
const menuRoute = require("./menu_item.route");
const countryRoute = require("./country.route");
const cityRoute = require("./city.route");
const adminRoute = require("./admin.route");





const router = express.Router();

router.use("/user", userRoute);
router.use("/state", stateRoute);
router.use("/review", reviewRoute);
router.use("/restaurant", restaurantRoute);
router.use("/rating", ratingRoute);
router.use("/payment", paymentRoute);
router.use("/owner", ownerRoute);
router.use("/order", orderRoute);
router.use("/order", orderRoute);
router.use("/notification", notificationRoute);
router.use("/menu", menuRoute);
router.use("/country", countryRoute);
router.use("/city", cityRoute);
router.use("/admin", adminRoute);





module.exports = router;
