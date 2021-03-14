  
const bcrypt=require("bcryptjs") ;
const jwt =require("jsonwebtoken");

const UserModal= require("../models/user.js");

const secret = 'test';
const register = async (req, res) => {
    const { email,name, password,  courseOfStudy, yearOfStudy } = req.body;
  
    try {
      const oldUser = await UserModal.findOne({ email });
  
      if (oldUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserModal.create({ email, password: hashedPassword, name, courseOfStudy, yearOfStudy});
  
      const token = jwt.sign( { email: result.email, id: result._id }, secret);
  
      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  };

  module.exports = register;