const Product = require("../models/productsModel");

// exports.getAll = Model => (req,res,next) =>{

// }

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    console.log("hello", newProduct, req.body);
    res.status(201).json({
      status: "success",
      data: {
        data: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
      error: err,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const foundProduct = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        foundProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
