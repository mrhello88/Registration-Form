const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const auth =require("../middleWare/auth")
const Model = require("../models/Schema&Model");
const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/page1",auth,(req,res)=>{
  res.render("secretPage1")
})
router.get("/page2",auth,(req,res)=>{
  res.render("secretPage2")
})
router.get("/page3",auth,(req,res)=>{
  res.render("secretPage3")
})
router.get("/registration", (req, res) => {
  res.render("registration");
});
router.get("/logout",auth, async (req,res)=>{
try {
  const findUser = await Model.findOne({_id:req.user._id});
  res.clearCookie("jwt");
  findUser.tokens.filter((curValue)=>{
    return curValue.token != req.token
  });
  await findUser.save();
  res.render("login")
} catch (error) {
  res.status(500).send(error)
}
})
router.post("/registration", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmedPassword;
    // console.log(password)
    // console.log(cpassword,password)
    if (cpassword === password) {
      const registerEmployee = new Model({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.password,
        confirmedpassword: req.body.confirmedpassword,
      });
      const token = await registerEmployee.getTheToken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
      });
      const result = await registerEmployee.save();
      res.status(201).render("index");
    } else {
      res.send("password is not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const loginEmployee = await Model.findOne({ email });
    const comparePassword = await bcrypt.compare(
      password,
      loginEmployee.password
    );
    const token = await loginEmployee.getTheToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    });
    if (comparePassword) {
      res.status(201).render("index");
    } else {
      res.status(401).send("Invalid Login Details");
    }
  } catch (error) {
    res.status(400).send("Invalid Login Details");
  }
});
// console.log("pakistan")
module.exports = router;
