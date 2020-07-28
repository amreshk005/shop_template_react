const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");
const UserWithOtp = require("../models/userWithPhoneModel");
const AppError = require("../utils/appError");
const catchAsnc = require("../utils/catchAsync");
const catchAsync = require("../utils/catchAsync");

const { SERVICE_ID, ACCOUNT_SID, AUTH_TOKEN } = process.env;

const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  console.log(token);
  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "sucess",
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    createSendToken(newUser, 201, res);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      messsage: err,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return next(new AppError("Please provide email and password!", 400));
    }

    const user = await User.findOne({
      email: email,
    }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }

    createSendToken(user, 200, res);
  } catch (err) {
    res.status(401).json({
      status: "fail",
      messsage: err,
    });
  }
};

exports.protect = catchAsync(async (req, res, next) => {
  //   try {
  let token;
  // Checking token
  console.log("token is", req.headers.authorization);
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1].toString();
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError("You are not logged in! Please log in to get access", 401));
  }

  // 2) verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log("decoded", decoded);

  //Check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError("the token belonging to this token does no longer exist.", 401));
  }

  /// Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.at)) {
    return next(new AppError("User recently changed password! Please log in again.", 401));
  }

  // Grant access to protected route
  req.user = currentUser;
  next();
  //   } catch (err) {
  //     res.status(404).json({
  //       status: "fail",
  //       message: err,
  //     });
  //   })
});

exports.otpLogin = async (req, res, next) => {
  try {
    console.log("we are here guys", req.body.phoneNumber);
    let verificationRequest = await client.verify.services(SERVICE_ID).verifications.create({ to: `+${req.body.phoneNumber}`, channel: "sms" });
    res.status(200).json({
      status: "success",
      data: verificationRequest,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      messsage: err,
    });
  }
};

exports.otpVerification = catchAsync(async (req, res, next) => {
  // try {
  let newUser;
  let { phoneNumber, otp } = req.body;
  let veryficationResult = await client.verify.services(SERVICE_ID).verificationChecks.create({ to: `+${phoneNumber}`, code: otp });

  if (veryficationResult.status === "approved") {
    const user = await UserWithOtp.findOne({
      phoneNumber: veryficationResult.to,
    });
    console.log("user", user);

    if (!user) {
      console.log("newUser1", phoneNumber);
      newUser = await UserWithOtp.create({
        phoneNumber: parseInt(phoneNumber),
      });

      console.log("newUser2", newUser);
    }
  }

  console.log(newUser);
  res.status(201).json({
    status: "success",
    messsage: veryficationResult,
    data: {
      newUser: newUser,
    },
  });
  // } catch (err) {
  //   res.status(500).json({
  //     status: "fail",
  //     messsage: err,
  //   });
  // }
});
