const Joi = require("joi");
/* ------------------------- CREATE OWNER VALIDATION ------------------------- */
const createOwner = {
  body: Joi.object().keys({
    owner_name: Joi.string().required().trim(),
    owner_email: Joi.string().required().trim(),
    owner_phoneno: Joi.number().integer().allow(),
    restaurant_name: Joi.string().required().trim(),
  }),
};
module.exports = {
  createOwner,
};
