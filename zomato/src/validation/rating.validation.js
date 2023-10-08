const Joi = require("joi");
/* ------------------------- CREATE RATING VALIDATION ------------------------- */
const createRating = {
  body: Joi.object().keys({
    restaurant: Joi.string().required().trim(),
    averageRating: Joi.number().integer().allow(),
    totalRatings: Joi.number().integer().allow(),
  }),
};
module.exports = {
    createRating,
};
