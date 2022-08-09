const mongoose = require('mongoose');
// this schema is to increase id in sequence
const counterSchema = new mongoose.Schema({
    id : {
        type : String
    },
    seq : {
        type : Number
    }
    
});

const Counter = mongoose.model('counter' , counterSchema);
module.exports = Counter;