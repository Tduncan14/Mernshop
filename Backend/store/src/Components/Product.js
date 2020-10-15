import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from './Rating';
import {Link} from 'react-router-dom';


const Product = ({product}) => {


    console.log(product,'this is the props')

   return(
       <Card className="my-3  p-3 rounded">  
        
        <Link href ={`/product/${product._id}`}>
           <Card.Img src={product.image} variant='top'/>

        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title as="div"> 
              <strong>
                  {product.name}
                  </strong> 
              </Card.Title>
            </Link>
          <Card.Title as="div">
              <Rating value = {product.rating} text={`${product.numReviews} reviews`} />

          </Card.Title>

          <Card.Title as="h3">
              ${product.price}

          </Card.Title>
      
        </Card.Body>
       </Card>
   )
}

export default Product;