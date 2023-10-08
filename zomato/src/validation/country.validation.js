const Joi = require("joi");
/* ------------------------- CREATE COUNTRY VALIDATION ------------------------- */
const createCountry = {
  body: Joi.object().keys({
    country_name: Joi.string().required().trim(),
  }),
};
module.exports = {
    createCountry ,
};
