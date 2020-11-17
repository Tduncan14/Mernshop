import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button, Form} from 'react-bootstrap';
import Rating from '../Components/Rating';
import {useDispatch,useSelector} from 'react-redux';
// import products from '../product';
// import Axios from 'axios';
import{listProductDetails} from '../actions/productActions';
import Loading from '../Components/Loading';
import Message from '../Components/Message';


const ProductScreen = ({match}) => {

    const [qty,setQty] = useState(0);

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product} = productDetails
 

    
    // const [product,setProduct] = useState({})


     useEffect(() =>{

      dispatch(listProductDetails(match.params.id))
     
    
    },[dispatch,match])

    


   return(
       <div>

        <Link className ='btn btn-dark my-3' to = '/'>
            Go Back
        </Link>
        {loading ? <Loading /> : error ? <Message variant='danger'>{error}</Message> :(
            <Row>
            <Col md={6}>

                <Image src={product.image} fluid />

            </Col>

            <Col md={3}>

                <ListGroup variant ='flush'>

                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </ListGroup.Item>


                    <ListGroup.Item>Price: ${product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>

            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Price:
                                </Col>

                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>


                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Status:
                                </Col>

                                <Col>
                                <strong>{product.StockinCount > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        {product.StockinCount > 0 &&(
                            <ListGroup.Item>
                               <Row>
                                   <Col>Qty</Col>
                                   <Col>
                                     <Form.Control as='select' value = {qty} onChange={(e) =>
                                     setQty(e.target.value)}>

                                      {
                                         [...Array(product.StockinCount).keys()].map(x => (
                                             <option key={x + 1} value={x + 1}>
                                                 {x + 1}
                                             </option>
                                         ))
}
                                     </Form.Control>
                                   
                                   </Col>
                               </Row>

                            </ListGroup.Item>
                        )}

                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0} >
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

            </Col>

        </Row>

        )}
        
        
       </div>
   )





}


export default ProductScreen