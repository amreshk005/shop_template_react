const Product = require("../models/productsModel");
const APIFeatures = require("../utils/APIFeatures");
const catchAsync = require("../utils/catchAsync");
// exports.getAll = Model => (req,res,next) =>{

// }

exports.getAllProducts = catchAsync(async (req, res) => {
  // const products = await Product.find();
  let filter = {};
  // if(req.params.tourId) filter = {tour: req.params.tour }
  const features = new APIFeatures(Product.find(), req.query).filter().sort();
  const doc = await features.query;
  console.log("doc", doc.slice(1, 2));
  res.status(200).json({
    status: "success",
    results: doc.length,
    data: doc,
  });
});

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

exports.getProduct = catchAsync(async (req, res) => {
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
});
