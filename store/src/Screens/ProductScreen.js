import React from 'react';
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap';
import Rating from '../Components/Rating';
import products from '../product';


const ProductScreen = ({match}) => {



    const product = products.find(p => p._id === match.params.id)
    
    console.log(product.name,'kr;;p')

   return(
       <div>

       <h1>
           {product.name}
       </h1>


       </div>
   )





}


export default ProductScreen