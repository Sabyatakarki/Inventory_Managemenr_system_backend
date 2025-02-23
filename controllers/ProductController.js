const Product = require('../Model/product'); // ✅ Ensure proper import
const fs = require('fs');
const path = require('path');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { productName, price, description } = req.body;
        const productImage = req.file ? req.file.filename : null;

        const newProduct = await Product.create({ // ✅ Use `Product` instead of `product`
            productName,
            price,
            description,
            productImage,
        });

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll(); // ✅ Use `Product`
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id); // ✅ Use `Product`

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, price, description } = req.body;
        const product = await Product.findByPk(id); // ✅ Use `Product`

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Handle the new image file if uploaded
        const productImage = req.file ? req.file.filename : product.productImage;

        // Delete old image if a new one is uploaded
        if (req.file && product.productImage) {
            const oldImagePath = path.join(__dirname, '../uploads/', product.productImage);
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
        }

        await product.update({
            productName,
            price,
            description,
            productImage,
        });

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id); // ✅ Use `Product`

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Delete the image file if it exists
        if (product.productImage) {
            const imagePath = path.join(__dirname, '../uploads/', product.productImage);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await product.destroy();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { deleteProduct, updateProduct, createProduct, getAllProducts, getProductById };
