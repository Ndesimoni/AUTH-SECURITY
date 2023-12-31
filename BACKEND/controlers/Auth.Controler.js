const postModel = require("../model/user_model.js");
const bcrypt = require("bcryptjs");

const postRequest = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashPassword = bcrypt.hashSync(password, 10);
  const saveToDataBase = new postModel({
    username,
    email,
    password: hashPassword,
  });
  console.log(saveToDataBase);
  try {
    await saveToDataBase.save();

    res.status(200).json({ message: "send to data base successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = postRequest;
