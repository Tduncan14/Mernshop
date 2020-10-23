const express = require('express');
// const product = require('./Data/Data.js');
// intializing express
const cors = require('cors');
const dotenv =require('dotenv');
const Connectdb = require('./Config/db');
const productRoutes = require('./routes/productRouter');
const {notFound,errorHandle} = require('./Middleware/errorHandler');


app = express();


dotenv.config()

Connectdb();

const PORT = process.env.PORT || 5000;



app.use(cors())



app.get('/', (req,res) =>{


    res.send('Api is running');
})


app.use('/api/products',productRoutes);


app.use(errorHandle)

app.use(notFound)









app.listen(PORT,()=>{


    console.log(` server running in ${process.env.NODE_ENV} mode you are now listening on ${PORT}  port
    `)


})

