/* ----------------------------- USER VALIDATION ---------------------------- */
module.exports.userValidation = require("./user.validation");
module.exports.adminValidation = require("./admin.validation");

/* -------------------------- RESTAURANT VALIDATION ------------------------- */
module.exports.restaurantValidation = require("./restaurant.validation");
module.exports.ownerValidation = require("./owner.validation");
module.exports.menuItemValidation = require("./menu_item.validation");
module.exports.orderValidation = require("./order.validation");
module.exports.ratingValidation = require("./rating.validation");

/* --------------------------- LOCATION VALIDATION -------------------------- */
module.exports.stateValidation = require("./state.validation");
module.exports.cityValidation = require("./city.validation");
module.exports.countryValidation = require("./country.validation");

/* --------------------------- PAYMENT VALIDATION --------------------------- */
module.exports.paymentValidation = require("./payment.validation");

/* ----------------------------- CHAT VALIDATION ---------------------------- */
module.exports.reviewValidation = require("./review.validation");
module.exports.notificationValidation = require("./notification.validation");
