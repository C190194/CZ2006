const bcrypt=require("bcryptjs") ;
const User = require('../models/user');

const forgotPassword = async (req, res) => {
    const { email, password} = req.body;
  
    try {
      const oldUser = await UserModal.findOne({ email });
  
      if (oldUser) 
      {
        const filter = { email: email };
        const hashedPassword = await bcrypt.hash(password, 12);
        const updatePass = {
          $set: {
            password:
              hashedPassword
          },
        };
        const result = await UserModal.updateOne(filter, updatePass);
        console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
       
        return res.status(400).json({ message: "Password updated" });
    }

  
      
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };

  module.exports = forgotPassword;