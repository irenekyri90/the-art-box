const express = require("express");
const authRouter = express.Router();

//const bcrypt = require("bcrypt");
//const User = require("../models/User.model");
//const zxcvbn = require("zxcvbn");

// Helper middleware
//const isLoggedIn = require('./../utils/isLoggedIn');
//const saltRounds = 10;

// GET     /auth/signup   -  Render the Signup form
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

module.exports = authRouter;
