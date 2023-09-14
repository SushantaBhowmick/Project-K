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
router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProductDetails);
router.route('/product/:id').put(isAuthenticated,authorizeRole, updateProduct);
router.route('/product/:id').delete(isAuthenticated,authorizeRole,deleteProduct);

module.exports = router;