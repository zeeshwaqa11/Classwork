const express = require('express');
const bodyParser =  require('body-parser');
const product = require('./Routes/Product.route');
const  Mongoose  = require('mongoose');
    const app = express();
    

Mongoose.connect("mongodb://localhost/studentsDb", {useNewUrlParser: true, useUnifiedTopology: true})

.then(()=>{
    console.log("Connected to the database");

})
.catch(err=>{
    console.log("Cant connect to the database");
    process.exit();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/products', product);
Mongoose.co

app.listen(3000, ()=>{
    console.log("Server is active!");
});