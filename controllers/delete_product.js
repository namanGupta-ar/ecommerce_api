const Product = require('../models/products');

// delete single product
module.exports.delete = async function(req,res){

    try{
        let id = req.params.id;

        await Product.findOneAndDelete({id : id});
            return res.status(200).json({
                data : { message : "product deleted"}
             });
    }catch(err){
        return res.status(500).json({
            message : "Internal Server Error",
        });
    }
};