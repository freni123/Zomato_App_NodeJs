const express = require("express");
/* ------------------------------- USER ROUTE ------------------------------- */
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const tokenRoute = require("./token.route");

/* ---------------------------- RESTAURANT ROUTE ---------------------------- */
const restaurantRoute = require("./restaurant.route");
const ownerRoute = require("./owner.route");
const menuRoute = require("./menu_item.route");
const orderRoute = require("./order.route");
const ratingRoute = require("./rating.route");

/* ----------------------------- LOCATION ROUTE ----------------------------- */
const stateRoute = require("./state.route");
const cityRoute = require("./city.route");
const countryRoute = require("./country.route");

/* ------------------------------ PAYMENT ROUTE ----------------------------- */
const paymentRoute = require("./payment.route");

/* ------------------------------- CHAT ROUTE ------------------------------- */
const reviewRoute = require("./review.route");
const notificationRoute = require("./notification.route");

const router = express.Router();

/* ---------------------------------- USER ---------------------------------- */
router.use("/user", userRoute);
router.use("/token", tokenRoute);
router.use("/admin", adminRoute);

/* ------------------------------- RESTAURANT ------------------------------- */
router.use("/restaurant", restaurantRoute);
router.use("/owner", ownerRoute);
router.use("/menu", menuRoute);
router.use("/order", orderRoute);
router.use("/rating", ratingRoute);

/* -------------------------------- LOCATION -------------------------------- */
router.use("/state", stateRoute);
router.use("/city", cityRoute);
router.use("/country", countryRoute);

/* --------------------------------- PAYMENT -------------------------------- */
router.use("/payment", paymentRoute);

/* ---------------------------------- CHAT ---------------------------------- */
router.use("/review", reviewRoute);
router.use("/notification", notificationRoute);

module.exports = router;
