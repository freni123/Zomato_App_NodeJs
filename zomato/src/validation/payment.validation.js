const Joi = require("joi");
/* ------------------------- CREATE PAYMENT VALIDATION ------------------------- */
const createPayment = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    order: Joi.string().required().trim(),
    amount: Joi.number().integer().allow(),
    paymentMethod: Joi.string().required().trim(),
    transactionID: Joi.string().required().trim(),
    status: Joi.string().required().trim(),
  }),
};
module.exports = {
  createPayment,
};
