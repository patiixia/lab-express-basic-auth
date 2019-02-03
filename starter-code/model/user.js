const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema ({
    userName: String,
    password: {type: String, min: 8},
  },
  {timestamps: true

});

const User = mongoose.model("User", user)

module.exports = User;