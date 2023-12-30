const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./Routes/user-route.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("the data base is connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("the server is runing on port 3000!");
});

app.use("/api/user", userRouter);
