const Product = require("../models/productsModel");
const APIFeatures = require("../utils/APIFeatures");
// exports.getAll = Model => (req,res,next) =>{

// }

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    let filter = {};
    // if(req.params.tourId) filter = {tour: req.params.tour }
    const features = new APIFeatures(Product.find(), req.query).filter();
    const doc = await features.query;
    console.log("doc", doc);
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
    // let filter = {};
    // if (req.params.productId) filter = { product: req.params.productId };
    const foundProduct = await Product.findById(req.params.id);
    // const features = new APIFeatures(Model.find(filter), req.query).filter().sort().paginate()

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
