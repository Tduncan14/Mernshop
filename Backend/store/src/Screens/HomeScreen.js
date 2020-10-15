import React,{useEffect, useState} from 'react';
import {Row,Col} from 'react-bootstrap';
import Product from '../Components/Product';
import Axios from 'axios';
const HomeScreen = () => {

      const [products,setproducts] = useState([])

        useEffect(() =>{


          const fetchProducts = async() =>{

            const {data} = await Axios.get('/api/products');

              setproducts(data)


          }

          fetchProducts()

   
          // const items = Axios.get('http://localhost:5000/api/products')
          // .then(res)

          




        },[])
    return(
        <>

      <h1> Latest product </h1>
      <Row>
       {products.map((product) =>(

         <Col key={product._id} sm={12} md={6} lg={4} xl ={3}>
           <Product product={product} />
         
         </Col>

       ))}
      </Row>

        </>
    )
}

export default HomeScreen;