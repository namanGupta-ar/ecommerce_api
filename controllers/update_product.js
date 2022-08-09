
const Product = require('../models/products');

module.exports.update = async function(req,res){
try{
    let id = req.params.id;
    let number = req.body.number;
    let product = await Product.findOne({id : id});
        product.quantity += Number(number);
        product.save();

        return res.status(200).json({
            data : { "product" : product},
            message : "updated successfully"
        });
    }catch(err){
        if(err){    
            return res.status(500).json({
                message : "Product Not available"
            });
        }
    }
}