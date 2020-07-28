const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, "A product must needed a brand name"],
  },
  product_name: {
    type: String,
    required: [true, "A prduct must have a name"],
  },
  price: {
    type: Number,
    required: [true, "A product needed a price"],
  },
  rating: {
    type: Number,
  },
  reviews: {
    type: String,
  },
  product_img: {
    type: String,
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
