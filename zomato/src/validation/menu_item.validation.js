const Joi = require("joi");
/* ------------------------- CREATE MENU_ITEM VALIDATION ------------------------- */
const createMenu = {
  body: Joi.object().keys({
    item_name: Joi.string().required().trim(),
    restaurant: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    price: Joi.number().integer(),
  }),
};
module.exports = {
    createMenu ,
};
