const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors");
const { createJWT, isTokenValid } = require("../utils/jwt.js");
require("dotenv").config();
const register = async (req, res) => {
  const { email, name, password } = req.body;
  const emailAlreadyExist = await User.findOne({ email });
  if (emailAlreadyExist) {
    throw new CustomAPIError.BadRequestError("Email already exist");
  }
  //first registered user as an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";
  const user = await User.create({ email, name, password, role });
  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  const token = createJWT({ payload: tokenUser });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
  });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const login = async (req, res) => {
  res.send("login");
};

const logout = async (req, res) => {
  res.send("logout");
};

module.exports = {
  register,
  login,
  logout,
};
