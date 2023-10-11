/* ------------------------------ USER ----------------------------- */
module.exports.userService = require("./user.service");
module.exports.adminService = require("./admin.service");
module.exports.tokenService =  require("./token.service");

/* ------------------------------- RESTAURANT ------------------------------- */
module.exports.restaurantService = require("./restaurant.service");
module.exports.ownerService = require("./owner.service");
module.exports.menuItemService = require("./menu_item.service");
module.exports.orderService = require("./order.service");
module.exports.galleryService = require("./food_gallery.service");
module.exports.ratingService = require("./rating.service");

/* -------------------------------- LOCATION -------------------------------- */
module.exports.stateService = require("./state.service");
module.exports.cityService = require("./city.service");
module.exports.countryService = require("./country.service");

/* --------------------------------- PAYMENT -------------------------------- */
module.exports.paymentService = require("./payment.service");

/* ---------------------------------- CHAT ---------------------------------- */
module.exports.reviewService = require("./review.service");
module.exports.notificationService = require("./notification.service");

/* ---------------------------------- EMAIL --------------------------------- */
module.exports.emailService = require("./email.service");











