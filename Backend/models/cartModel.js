const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        name: String,
        price: Number,
      },
    ],
    createdOn: {
      type: Date,
      default: Date.now,
    },
    subTotal: {
      default: 0,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
