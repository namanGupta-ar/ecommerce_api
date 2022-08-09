const express = require('express');
const router = express.Router();


const addProductController = require('../controllers/create_product');
const showProductController = require('../controllers/show_product');
const deleteProductController = require('../controllers/delete_product');
const updateProductController = require('../controllers/update_product');
//  Create new product
router.post('/create', addProductController.create);
// Show all products
router.get('/', showProductController.showProducts);
// Delete product
router.delete('/:id', deleteProductController.delete);
// Update Quantity
router.post('/:id/update_quantity',updateProductController.update);



module.exports =  router;