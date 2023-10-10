const Joi = require("joi");

 /* --------------------------- CREATE JWTTOKEN-------------------------- */
const generateToken = {
  body: Joi.object({
    user: Joi.string().allow().trim(),
  }),
};

module.exports = {
  generateToken,
};
