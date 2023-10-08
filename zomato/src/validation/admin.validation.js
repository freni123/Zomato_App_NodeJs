const Joi = require("joi");
/* ------------------------- CREATE ADMIN VALIDATION ------------------------- */
const createAdmin = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  }),
};
module.exports = {
  createAdmin,
};
