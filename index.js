const express = require('express');
const app = express();
const port = 8000;

// Adding Database
const db = require('./config/mongoose');
const Product = require('./models/products');

app.use(express.urlencoded());
app.use('/' , require('./routes'));




app.listen(port , function(err){
    if(err)
        console.log(`Error in running the server : ${err}`);
        console.log(`Server is running on port : ${port}`);
})