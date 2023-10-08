const Joi = require("joi");
/* ------------------------- CREATE CITY VALIDATION ------------------------- */
const createCity = {
  body: Joi.object().keys({
    city_name: Joi.string().required().trim(),
    state: Joi.string().required().trim(),
    country: Joi.string().required().trim(),
  }),
};
module.exports = {
  createCity,
};
