
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce_api');

const db = mongoose.connection;

db.on('error', console.error.bind(console , 'error connecting to database'));

db.once('open' , function(){
    console.log('Successfully connected to the database');
});