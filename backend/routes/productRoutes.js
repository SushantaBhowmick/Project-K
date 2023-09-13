const express = require('express');
const { 
    createProduct, 
    getAllProducts, 
    updateProduct, 
    deleteProduct,
    getProductDetails
} = require('../controllers/productController');
const { isAuthenticated, authorizeRole } = require('../middlewares/auth');

const router = express.Router();

router.route('/product/new').post(isAuthenticated,authorizeRole, createProduct);
router.route('/products').get(isAuthenticated, getAllProducts);
router.route('/product/:id').get(isAuthenticated, getProductDetails);
router.route('/product/:id').put(updateProduct);
router.route('/product/:id').delete(deleteProduct);

module.exports = router;