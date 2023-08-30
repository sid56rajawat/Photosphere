const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { fullName, email, userName, password } = req.body;

  if (!userName || !password || !fullName || !email)
    return res.json({ message: "All Fields are required." });

  // check for duplicate usernames in the db
  const duplicate = await User.findOne({ username: userName }).exec();
  if (duplicate) return res.json({ message: "Username already exists" }); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new user
    const result = await User.create({
      username: userName,
      password: hashedPwd,
      fullname: fullName,
      email: email,
    });

    res.status(201).json({ message: `New user ${userName} created!` });
  } catch (err) {
    res
      .status(500)
      .json({ message: "server error while creating new user", error: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userName = req.params.userName;
    const validUser = await User.findOneAndDelete({
      username: userName,
    }).exec();
    if (!validUser) {
      return res
        .status(400)
        .json({ message: `No existing username ${userName}` });
    }
    return res
      .status(200)
      .json({ message: `user ${userName} deleted successfully` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error while deleting user", error: error });
  }
};

module.exports = { handleNewUser, deleteUser };
