const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
    
},{
    toJSON : {
        // to hide password when json api call
        transform(doc,ret){
            delete ret._id;
            delete ret.__v;
        }
    }
}
);

const Product = mongoose.model('products' , productSchema);
module.exports = Product;