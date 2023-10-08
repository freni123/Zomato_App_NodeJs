const Joi = require("joi");
/* ------------------------- CREATE STATE VALIDATION ------------------------- */
const createState = {
  body: Joi.object().keys({
    state_name: Joi.string().required().trim(),
  }),
};
module.exports = {
    createState,
};
