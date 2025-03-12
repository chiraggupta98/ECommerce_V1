const mongoose = require('mongoose');

const Product = require('./models/Product');

const products=[
    {
        name:'Iphone14pro',
        img:"https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price:130000,
        desc:"very costly, aukaat ke bahar"
    },
    {
        name:'Macbook m2',
        img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price:250000,
        desc:"ye toh bilkul hi aukat ke bahar hai"
    },
    {
        name:'Iwatch',
        img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price:51000,
        desc:'ye sasta hai lelo'
    },
    {
        name:'iPad Pro',
        img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price:237900,
        desc:"life mein kuch cheese sirf dekhne ke liye hota hai"
    },
    {
        name:'airpods',
        img:"https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price:25000,
        desc:"badiya hai kamao kamao"
    }
]

//insertMany and other mongodb also returns a promise
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data Seeded Successfully");
}

module.exports = seedDB;