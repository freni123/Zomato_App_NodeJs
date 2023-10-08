const Joi = require("joi");
/* ------------------------- CREATE NOTIFICATION VALIDATION ------------------------- */
const createNotification = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    restaurant: Joi.string().required().trim(),
    message: Joi.string().required().trim(),
    date: Joi.date().required(),
  }),
};
module.exports = {
    createNotification,
};
