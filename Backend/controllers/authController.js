const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

//Register User

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);

    res.status(201).json({ user: { id: user._id, name, email }, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login User

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);
    res
      .status(200)
      .json({ user: { id: user._id, name: user.name, email }, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User Profile (Protected)
exports.getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.status(200).json(user);
};
