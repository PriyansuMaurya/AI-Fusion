const Email = require("./serverModel");
const asyncHandler = require("express-async-handler");

const registerEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }
  const userExists = await Email.findOne({ email: email });
  if (userExists) {
    res.status(400);
    throw new Error("Email Exists");
  }
  const user = await Email.create({ email: email });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

module.exports = { registerEmail };
