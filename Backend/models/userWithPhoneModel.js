const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchemaWithPhone = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: [true, "phoneNumber is required"],
  },
});

// userSchemaWithPhone.pre("save", async function (next) {
//   this.password = await bcrypt.hash(this.password, 12);

//   next();
// });

const UserWithOtp = mongoose.model("UserWithOtp", userSchemaWithPhone);

module.exports = UserWithOtp;
