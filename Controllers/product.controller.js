



let products = [
  { id: 1, name: 'Product 1', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 200, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  { id: 2, name: 'Product 2', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 100, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  { id: 3, name: 'Product 3', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 300, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  { id: 4, name: 'Product 4', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 200, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  { id: 5, name: 'Product 5', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 600, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  { id: 6, name: 'Product 6', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 800, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  { id: 7, name: 'Product 7', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 400, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  { id: 8, name: 'Product 8', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 100, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  { id: 9, name: 'Product 9', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price: 300, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
  { id: 10, name: 'Product 10', description: 'Tata Soulfull Millet Granola, Almonds & Cranberries,Rich in Fibre & Protein, Breakfast Cereal Pouch', price:500, image: 'https://rukminim2.flixcart.com/image/280/280/kqpj4i80/pulses/r/a/z/1-arhar-dal-arhar-dal-natureland-organics-original-imag4npb8twt4dwz.jpeg?q=70' },
];


const createProduct = (req, res) => {
try {
  const newProduct = {
    id: products.length + 1, 
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
} catch (error) {
  res.status(400).json({ message: error.message });
}
};

const getAllProducts = (req, res) => {
try {
  res.json(products);
} catch (error) {
  res.status(500).json({ message: error.message });
}
};


module.exports = {
  createProduct,
  getAllProducts,
  products
};