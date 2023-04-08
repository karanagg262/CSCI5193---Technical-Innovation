const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserDetails = require("../Models/User");

const saltRounds = 10;

router.post("/addUser", async (req, res) => {
  try {
    console.log("req.body");
    console.log(req.body);
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const emailExistsResult = await checkIfEmailExists(email);
    if (emailExistsResult.status === 409) {
      return res.status(409).json({ message: emailExistsResult.message });
    }
    const newUser = new UserDetails({
      ...req.body,
      password: hashedPassword,
    });
    await newUser.save();

    res.json({
      createdUser: newUser.transform(),
      status: "success",
      statusMessage: "Successfully registered",
    });
  } catch (err) {
    console.log("error");
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/authenticateUser", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const emailExistsResult = await checkIfEmailExists(email);
    console.log(emailExistsResult);
    console.log(emailExistsResult.hashedPassword);
    if (emailExistsResult.status === 409) {
      const isMatch = bcrypt.compareSync(
        password,
        emailExistsResult.hashedPassword
      );
      if (isMatch) {
        res.status(200).json({ message: "User Authenticated" });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(404).json({ message: "Please register" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function checkIfEmailExists(email) {
  const existingUser = await UserDetails.findOne({ email });

  if (existingUser) {
    return {
      status: 409,
      message: "Email already exists",
      hashedPassword: existingUser.password,
    };
  } else {
    return { status: 200 };
  }
}
module.exports = router;
