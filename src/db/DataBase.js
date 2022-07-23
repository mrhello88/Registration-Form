// require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(`mongodb+srv://mrhello:password123COMPLETE@cluster0.z7eghba.mongodb.net/Registrationdb?retryWrites=true&w=majority`)
  // ${process.env.DATABASE}://${process.env.LOCAL_HOST}/${process.env.DATA_BASE}
  .then(() => {
    console.log("Connection is SuccessFul!");
  })
  .catch((e) => {
    console.log("Connection is Failed:" + e);
  });
  