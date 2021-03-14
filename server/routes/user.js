const express=require("express") ;
// const User=require('../models/user');
const router = express.Router();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const {registerValidation, loginValidation } = require('../validation');

//const {login,register}=require("../controllers/user.js");
const login=require("../controllers/login");
const register=require("../controllers/register.js");

router.post("/login", login);
router.post("/register", register);

module.exports= router;