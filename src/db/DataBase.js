require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(`mongodb://localhost:27017/loginDB`)
  // ${process.env.DATABASE}://${process.env.LOCAL_HOST}/${process.env.DATA_BASE}
  .then(() => {
    console.log("Connection is SuccessFul!");
  })
  .catch((e) => {
    console.log("Connection is Failed:" + e);
  });
