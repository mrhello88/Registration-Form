const path =require("path")
require("dotenv").config({path:path.resolve(__dirname,"../.env")});
const jwt = require("jsonwebtoken");
const Model = require("../models/Schema&Model");

const auth = (req,res,next)=>{
 try {
    const token = req.cookies.jwt;
    const userVerify = jwt.verify(token,process.env.SECRET_KEY);
    const user =  Model.findOne({_id:userVerify._id});
    req.token  =  token;
    req.user = userVerify;
    next();
 } catch (error) {
    res.status(401).send(error)
 }
}

module.exports = auth;