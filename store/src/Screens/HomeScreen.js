import React,{useEffect} from 'react';
import {} from 'react-redux'
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col} from 'react-bootstrap';
import Product from '../Components/Product';
import {listProducts} from '../actions/productActions';
// import Axios from 'axios';
import Message from '../Components/Message';
import Loading from '../Components/Loading';

const HomeScreen = () => {

       const dispatch = useDispatch()

       const productList = useSelector(state => state.productList)

        const  {loading,error,products} = productList; 

      // const [products,setproducts] = useState([])

        useEffect(() =>{

          dispatch(listProducts())
          // const fetchProducts = async() =>{

          //   const {data} = await Axios.get('/api/products');

          //     setproducts(data)


          }

          // fetchProducts()

   
          // const items = Axios.get('http://localhost:5000/api/products')
          // .then(res)


        ,[dispatch])


        //  const products = []

    return(
        <>

      <h1> Latest product </h1>
      {loading ? <Loading/> : error ? <Message variant='danger'>{error}</Message> :   <Row>
       {products.map((product) =>(

         <Col key={product._id} sm={12} md={6} lg={4} xl ={3}>
           <Product product={product} />
         
         </Col>

       ))}
      </Row>
} 
   
        </>
    )
}

export default HomeScreen;