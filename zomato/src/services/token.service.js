const jwt = require("jsonwebtoken");
const { token } = require("../models");
const config = require("../config/config");

/* ------------------------------ create tokem ------------------------------ */
const createToken = async (reqBody) => {
  let payload = {
    ...reqBody,
  };
  return jwt.sign(payload, config.jwt.secret_key);
};

/* ------------------------------- save token ------------------------------- */
const saveToken = async (reqBody) => {
  return token.findOneAndUpdate(
    {
      user: reqBody.user,
    },
    {
      $set: {
        ...reqBody,
      },
    },
    {
      new: true,
      upsert: true,
    }
  );
};
module.exports = {
  createToken,
  saveToken,
};
