const express = require('express');
const Product = require('../Models/Productmodel');
const asyncHandler = require('express-async-handler');

// Fetch products
// Get request to /api/products/
// Public route

 const router = express.Router()


router.get('/',asyncHandler(async (req,res)=> {

    // mongoose schema finding object
    const products =  await Product.find({})

    res.json(products)

}))

// T

router.get('/:id', asyncHandler(async (req,res) => {

    const product = await Product.findById(req.params.id)
if(product) {
    res.json(product)
}   

  else{
      res.status(404)
      throw new Error('Product not Found')
  }
}))


module.exports = router;