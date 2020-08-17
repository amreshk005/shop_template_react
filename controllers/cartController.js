exports.addItemToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const quantity = Number.parseInt(req.body.quantity);

    let cart = await cart.findOne({});
  } catch (err) {}
};
