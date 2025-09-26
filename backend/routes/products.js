const express = require('express');
const Product = require('../models/products');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    // Transform data to match frontend expectations
    const transformedProducts = products.map(product => ({
      id: product._id,
      name: product.name,
      type: product.type,
      dosage: product.dosage,
      quantity:product.quantity,
      price: product.price,
      currency: product.currency,

      image: product.imageBase64, 
      description: product.description,
      
      //subcategory: product.subcategory,
      
      //quantity: product.quantity,
      
      //inStock: product.inStock
    }));
    res.json(transformedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Get products by category (type)
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { subcategory } = req.query;
    
    let query = { type: category };
    if (subcategory) {
      query.subcategory = subcategory;
    }
    
    const products = await Product.find(query);
    
    // Transform data to match frontend expectations
    const transformedProducts = products.map(product => ({
      id: product._id,
      name: product.name,
      type: product.type,
      dosage: product.dosage,
      quantity:product.quantity,
      price: product.price,
      currency: product.currency,
      image: product.imageBase64, 
      description: product.description,
    }));
    
    res.json(transformedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // Transform data to match frontend expectations
    const transformedProduct = {
      id: product._id,
      name: product.name,
      type: product.type,
      dosage: product.dosage,
      quantity:product.quantity,
      price: product.price,
      currency: product.currency,

      image: product.imageBase64, 
      description: product.description,
    };
    
    res.json(transformedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;