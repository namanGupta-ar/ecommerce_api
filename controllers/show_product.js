
const Product = require('../models/products');


// Show all products
module.exports.showProducts = async function(req,res){

    try{
        let products = await Product.find({});
            return res.status(200).json({
                message : "All Products",
                data : { "products" : products}
            });
    }catch(err){
        return res.status(500).json({
            message : "Internal Server Error",
        });
    }
}