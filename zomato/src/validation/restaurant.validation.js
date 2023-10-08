const Joi = require("joi");
/* ------------------------- CREATE RESTAURANT VALIDATION ------------------------- */
const createRestaurant = {
  body: Joi.object().keys({
    res_name: Joi.string().required().trim(),
    res_desc: Joi.string().required().trim(),
    res_location: Joi.string().required().trim(),
    owner_name: Joi.string().required().trim(),
    city: Joi.string().required().trim(),
    opening_time: Joi.string().required().trim(),
    closeing_time: Joi.string().required().trim(),
  }),
};
module.exports = {
  createRestaurant,
};
