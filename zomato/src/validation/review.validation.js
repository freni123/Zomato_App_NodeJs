const Joi = require("joi");
/* ------------------------- CREATE REVIEW VALIDATION ------------------------- */
const createReview = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    restaurant: Joi.string().required().trim(),
    comment: Joi.string().required().trim(),
    date: Joi.string().required().trim(),
  }),
};
module.exports = {
  createReview,
};
