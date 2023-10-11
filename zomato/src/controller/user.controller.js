const { userService, emailService } = require("../services");
const ejs = require("ejs");
const path = require("path");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
/* ------------------------------ USER REGISTER ----------------------------- */
const register = async (req, res) => {
  // validation
  const { email, password, role } = req.body;

  const hashPassword = await bcrypt.hash(password, 6);

  let option = {
    email,
    role,
    exp: moment().add(1, "days").unix(),
  };
  const token = await jwt.sign(option, jwtSecrectKey);

  const filter = {
    email,
    role,
    password: hashPassword,
    token,
  };
  const data = await userService.createUser(filter);
  res.status(200).json({
    success: true,
    message: "user register successfully!",
    data: { data },
  });
};
/* ------------------------------- USER LOGIN ------------------------------- */
const login = async (req, res) => {
  try {
    // validation
    const { email, password } = req.body;

    if (!findUser) throw Error("User Not Found");

    const successPassword = await bcrypt.compare(
      password,
      findUser.hashPassword
    );
    if (!successPassword) throw Error("Incorrect Password");
    let option = {
      email,
      role: findUser.role,
      exp: moment().add(1, "days").unix(),
    };
    let token;
    if (findUser && successPassword) {
      token = await jwt.sign(option, jwtSecrectKey);
    }

    let data;
    if (token) {
      data = await userService.findUserAndUpdate(findUser._id, token);
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
/* -------------------------------- ALL USER -------------------------------- */
const getAllUser = async (req, res) => {
  try {
    console.log(req.headers.token, "");
    await auth(req.headers.token, ["admin"]);

    const data = await userService.getAllUser({ role: "admin" });
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
/* ------------------------------- CREATE USER ------------------------------ */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    const userExists = await userService.getUserByEmail(reqBody.email);
    // if (userExists) {
    //   throw new Error("User already created by this email!");
    // }
    ejs.renderFile(
      path.join(__dirname, "../views/otp-template.ejs"),
      {
        email: reqBody.email,
        otp: ("0".repeat(4) + Math.floor(Math.random() * 10 ** 4)).slice(-4),
        first_name: reqBody.first_name,
        last_name: reqBody.last_name,
      },
      async (err, data) => {
        if (err) {
          let userCreated = await userService.getUserByEmail(reqBody.email);
          if (userCreated) {
            await userService.deleteUserByEmail(reqBody.email);
          }
          throw new Error("Something went wrong, please try again.");
        } else {
          emailService.sendMail(reqBody.email, data, "Verify Email");
        }
      }
    );
    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("User not found !");
    }

    res.status(200).json({
      success: true,
      message: "User created !",
      data: user,
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: false,
      data:
        error?.message || "Something wents wrong , please try again or later !",
    });
  }
};

/* ------------------------------ GET USER LIST ----------------------------- */
const getUserList = async (req, res) => {
  try {
    const getList = await userService.getUserList();
    if (!getList) {
      throw new Error("User not found !");
    }

    res.status(200).json({
      success: true,
      message: "Get user list !",
      data: getList,
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: false,
      message:
        error?.message || "Something wents wrong , please try again or later !",
    });
  }
};
/* ------------------------- GET USER DETAILS BY ID ------------------------- */
const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const getDetails = await userService.getUserById(userId);

    if (!getDetails) {
      throw new Error("User not found !");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully !",
      data: getDetails,
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: false,
      message:
        error?.message || "Something wents wrong , please try again or later !",
    });
  }
};

/* ------------------------ USER DETAILS UPDATE BY ID ----------------------- */
const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExist = await userService.getUserById(userId);

    if (!userExist) {
      throw new Error("User not found !");
    }

    await userService.updateUser(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully !",
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: false,
      message:
        error?.message || "Something wents wrong , please try again or later !",
    });
  }
};

/* ------------------------------- DELETE USER ------------------------------ */
const deleteUser = async (req, res) => {
  try {
    const userExists = await userService.getUserById(req.params.userId);
    if (!userExists) {
      throw new Error("User not found !");
    }

    await userService.deleteUser(req.params.userId);

    res.status(200).json({
      success: true,
      message: "User deleted !",
    });
  } catch (error) {
    res.status(error?.message || 400).json({
      success: true,
      message:
        error?.message || "Something wents wrong , please try again or later !",
    });
  }
};

/* -------------------------------- SEND MAIL ------------------------------- */
const sendMail = async (req, res) => {
  try {
    const reqBody = req.body;
    const sendMail = await emailService.sendMail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );

    if (!sendMail) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    res.status(200).json({
      success: true,
      message: "Email send successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
  getAllUser,
  createUser,
  getUserList,
  getUserDetails,
  updateUser,
  deleteUser,
  sendMail,
};
