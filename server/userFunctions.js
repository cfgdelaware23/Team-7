const User = require("./models/User.js");
import mongoose from "mongoose"

// GET a specific user
const getUser = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such user' });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: 'No such user' });
  }

  res.status(200).json(user);
}

// POST (create) a new user
const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    snap,
    phone,
    email
  } = req.body;

  try {
    const user = await User.create({
      firstName,
      lastName,
      snap,
      phone,
      email,
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createUser,
  getUser
}