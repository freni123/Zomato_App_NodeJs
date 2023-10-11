const jwt = require("jsonwebtoken");
const { Token } = require("../models");
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
  return Token.findOneAndUpdate(
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
