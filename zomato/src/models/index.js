/* ------------------------------- USER MODEL ------------------------------- */
module.exports.User = require("./user.model");
module.exports.Admin = require("./admin.model");
/* -------------------------------------------------------------------------- */
/*                              RESTAURANT MODEL                              */
/* -------------------------------------------------------------------------- */
module.exports.Restaurant = require("./restaurant.model");
module.exports.Owner = require("./owner.model");
module.exports.Category = require("./category.model");
module.exports.menuItem = require("./menu_item.model");
module.exports.Order = require("./order.model");
module.exports.foodGallery = require("./food_gallery.model");
module.exports.Rating = require("./rating.model");
/* -------------------------------------------------------------------------- */
/*                               LOCATION MODEL                               */
/* -------------------------------------------------------------------------- */
module.exports.City = require("./city.model");
module.exports.State = require("./state.model");
module.exports.Country = require("./country.model");
/* -------------------------------------------------------------------------- */
/*                                PAYMENT MODEL                               */
/* -------------------------------------------------------------------------- */
module.exports.Payement = require("./payment.model");

/* -------------------------------------------------------------------------- */
/*                                 CHAT MODEL                                 */
/* -------------------------------------------------------------------------- */
module.exports.Notification = require("./notification.model");
module.exports.Review = require("./review.model");
