const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      require: false,
    },
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("User", userSchema);

module.exports = User;
