const express = require('express');
const Product = require('../models/Product')
const router = express.Router(); //mini instance

const {validateProduct} = require('../middleware')

//as app is an instance of whole application so, i cannot use that so we will use router for get & post


//to show all the products
router.get('/products',async(req,res)=>{
    try{
        let products = await Product.find({})   //it returns a promise
        res.render('products/index',{products});
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


//to show the form for new product
router.get('/product/new',(req,res)=>{
    try{
        res.render('products/new');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})

//to actually add the product
router.post('/products', validateProduct , async(req,res)=>{
    try{
        let {name,img,price,desc} = req.body;
        await Product.create({name,img,price,desc});
        
        //flash
        req.flash('success','Product added Successfully')
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }

})

//to show a particular product
router.get('/products/:id',async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        
        //with flash
        res.render('products/show',{foundProduct , msg:req.flash('msg')})
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})

//form to edit the product
router.get('/products/:id/edit',async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('products/edit',{foundProduct});
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


//to actually edit the data in db
router.patch('/products/:id', validateProduct , async (req,res)=>{
    try{
        let {id} = req.params;
        let {name,img,price,desc} = req.body;
        await Product.findByIdAndUpdate(id,{name,img,price,desc});

        // req.flash('msg','Product edited Successfully')
        req.flash('success','Product edited Successfully')
        res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


//to delete a product
router.delete('/products/:id',async(req,res)=>{
    try{
        let {id} = req.params;
        
        //to delete the product firstly i need to remove the review array
        const product = await Product.findById(id);
        // for(let id of product.reviews){
        //     await Review.findByIdAndDelete(id)
        // }
    
        await Product.findByIdAndDelete(id);
        req.flash('success','Product deleted Successfully')
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


module.exports = router;