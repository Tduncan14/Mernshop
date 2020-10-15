const express = require('express');
const product = require('./Data/Data.js');
// intializing express
const cors = require('cors');
const dotenv =require('dotenv');
const Connectdb = require('./Config/db');


app = express();


dotenv.config()

Connectdb();

const PORT = process.env.PORT || 5000;



app.use(cors())


app.get('/', (req,res) =>{


    res.send('Api is running');
})



app.get('/api/products',(req,res)=>{


  res.json(product)


})


app.get('/api/products/:id',(req,res) =>{

    const products = product.find(p => p._id === req.params.id)
      
    res.json(products)
})



app.listen(PORT,()=>{


    console.log(` server running in ${process.env.NODE_ENV} mode you are now listening on ${PORT}  port
    `)


})

