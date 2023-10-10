const Joi = require("joi");
/* ------------------------- CREATE USER VALIDATION ------------------------- */
const createUser = {
  body: Joi.object().keys({
    user_name: Joi.string().required().trim(),
    phone_no: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    role: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    country: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
  }),
};
 /* -------------------------------- SEND MAIL ------------------------------- */
const sendMail = {
  body: Joi.object({
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
}
module.exports = {
  createUser,
  sendMail
};
