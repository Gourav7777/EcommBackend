const { products } = require("./product.controller");



let orders = [];

const placeOrder = (req, res) => {
  const { firstName, lastName, address, cart } = req.body;

  if (!firstName || !lastName || !address) {
    return res.status(400).json({ message: 'First name, last name, and address are required.' });
  }

  const orderDetails = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) {
      throw new Error(`Product with id ${item.productId} not found`);
    }
    return {
      productId: item.productId,
      quantity: item.quantity,
      totalPrice: product.price * item.quantity
    };
  });

  const order = {
    id: orders.length + 1,
    customer: {
      firstName,
      lastName,
      address
    },
    items: orderDetails,
  };

  orders.push(order);

  console.log('Order placed:', order);

  res.status(201).json({ message: 'Order placed successfully.', order });
};

module.exports = {
  placeOrder
};
