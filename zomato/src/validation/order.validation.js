const Joi = require("joi");
/* ------------------------- CREATE ORDER VALIDATION ------------------------- */
const createOrder = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    restaurant: Joi.string().required().trim(),
    totalPrice: Joi.number().integer().allow(),
    items: Joi.string().required().trim(),
    status: Joi.string().required().trim(),
    orderDate: Joi.date().required(),
  }),
};
module.exports = {
    createOrder,
};
