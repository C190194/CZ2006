const express=require("express") ;
// const User=require('../models/user');
const router = express.Router();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const {registerValidation, loginValidation } = require('../validation');

//const {login,register}=require("../controllers/user.js");
const login=require("../controllers/login");
const register=require("../controllers/register.js");
const forgot = require("../controllers/forgotPassword");

router.post("/login", login);
router.post("/register", register);
router.post("/forgotPassword/reset",forgot.forgotPassword);
router.post("/forgotPassword/sendCode",forgot.sendEmail);

module.exports= router;