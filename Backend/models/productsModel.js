const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, "A product must needed a brand name"],
  },
  category: {
    type: String,
    required: [true, "Category is required for the product"],
  },
  product_name: {
    type: String,
    required: [true, "A prduct must have a name"],
  },
  price: {
    type: Number,
    required: [true, "A product needed a price"],
  },
  OriginalPrice: {
    type: Number,
  },
  PercentOff: {
    type: Number,
  },
  rating: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating mus be below 5.0"],
    set: (val) => Math.round(val * 10) / 10,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  product_img: [String],
  return_underDays: Number,
  paymentType: String,
  availableOffer: [String],
  delivery_charge: {
    type: Number,
    required: [true, "delivery charge is required"],
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
