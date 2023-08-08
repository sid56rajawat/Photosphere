const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  console.log(req.body); //1.
  const { fullName, email, userName, password } = req.body;

  if (!userName || !password || !fullName || !email)
    return res.status(400).json({ message: "All Fields are required." });

  // check for duplicate usernames in the db
  // const duplicate = await User.findOne({ username: userName }).exec();
  // if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);
    console.log(hashedPwd); //2.

    //create and store the new user
    // const result = await User.create({
    //   username: userName,
    //   password: hashedPwd,
    //   fullname: fullName,
    //   email: email,
    // });

    // console.log(result);

    res.status(201).json({ success: `New user ${userName} created!` });
  } catch (err) {
    res.status(500).json({ message: "Error from server side" + err.message });
  }
};

module.exports = { handleNewUser };
