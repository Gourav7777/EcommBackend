const { products } = require("./product.controller");



let orders = [];

const placeOrder = (req, res) => {
  const { productId, quantity, firstName, lastName, address } = req.body;


  if (!firstName || !lastName || !address) {
    return res.status(400).json({ message: 'First name, last name, and address are required.' });
  }

  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found.' });
  }

  const totalPrice = product.price * quantity;
  const order = {
    id: orders.length + 1,
    productId,
    quantity,
    totalPrice,
    customer: {
      firstName,
      lastName,
      address
    }
  };

  orders.push(order);

  console.log('Order placed:', order);

  res.status(201).json({ message: 'Order placed successfully.', orders });
};

module.exports = {
  placeOrder
};
