const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Scehma = new mongoose.Schema({
  firstname: {
    type: String,
    minlength: [3, "This is minimum 3 letters"],
    required: true,
  },
  lastname: {
    type: String,
    minlength: [3, "This is minimum 3 letters"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("This is not valid Email");
      }
    },
  },
  phone: {
    type: Number,
    required:true,
    min:[11,"less than 11"],
    // max:[11,"greater than 11"],
  },
  confirmedPassword: {
    type: String,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw Error("This is not Valid and weak password");
      }
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw Error("This is not Valid and weak password");
      }
    },
  },
  gender: {
    type: String,
    required: true,
  },
  tokens:[{
    token:{
        type:String,
        required:true,
    }
  }]
});
Scehma.methods.getTheToken = async function(){
    try{
    const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
    // console.log(token,process.env.SECRET_KEY);
     this.tokens = this.tokens.concat({token});
     await this.save();
     return token;
    }catch(error){
        res.send("This is error: " + error)
    }
}

Scehma.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        this.confirmedPassword = undefined;
    }
    next();
})
// pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 10);
//     this.confirmedPassword = undefined;
//   }
//   next();
// }); 

const Model = new mongoose.model("loginDCM", Scehma);
module.exports = Model;
