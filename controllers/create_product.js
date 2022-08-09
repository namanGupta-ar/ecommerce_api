const Product = require('../models/products');
const Counter = require('../models/counter');
// delete single task
module.exports.create =  async function(req,res){ 
    
    try {
        // here is our counter database to get all id in sequence
        let cd = await Counter.findOneAndUpdate(
            {id : "autoval"},
            {"$inc" : {seq : "1"}}, //  here we are increasing seq by 1 , whose id is autoval
            {new : true});

        let newId;
            if(cd == null){
                const newval = new Counter({id : "autoval",seq : 1});
                newval.save();
                newId = 1;
            }else 
                newId = cd.seq;


                // product
                let newProduct = await Product.create({
                    id : newId,
                    name : req.body.name,
                    quantity : req.body.quantity
                });

                    return res.status(201).json({
                        message : "New Product Added",
                        data : { product : {
                            name : newProduct.name,
                            quantity : newProduct.quantity
                        }}
                    })
    }catch(err){
        return res.status(500).json({
            message : "Internal Server Error"
        });
    }
};

