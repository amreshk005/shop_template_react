const express = require("express");
const productController = require("../controllers/productsController");
const authController = require("../controllers/authController");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("it's working");
// });

// router.route("/addProduct").post(authController.protect, productController.createOne);
router.route("/addProduct").post(productController.createOne);

router.route("/getAllProducts").get(productController.getAllProducts);
// router.route("/getAllProducts/?filter")

router.route("/getProduct/:id").get(productController.getProduct);

module.exports = router;
