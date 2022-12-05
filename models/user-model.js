const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 3,
  },
  googleID: { type: String },
  date: { type: Date, default: Date.now() },
  thuumbnail: { type: String },
  //local login
  email: { type: String },
  password: { type: String, maxlength: 1024, minlength: 6 },
});

module.exports = mongoose.model("User", userSchema);
