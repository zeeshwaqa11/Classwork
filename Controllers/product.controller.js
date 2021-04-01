const Product = require('../Models/Productmodel');

    exports.test=(req,res)=>{
        res.send("Greetings from Test Controller");
        
    }



exports.product_create = (req,res)=>{
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
     product.save((err)=>{
        if(err){
            return next(err);
             }
        res.send('Saved!!');
     })
    }

   exports.product_details = (req,res)=>{
        Product.findById(req.params.id, function(err, product){
        if(err) return next(err);
        res.send(product);
        })
    }


    