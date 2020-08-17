const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/otpLogin", authController.otpLogin);
router.post("/otpVerification", authController.otpVerification);
module.exports = router;
