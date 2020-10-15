import React from 'react';
import{Container} from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';

const App = () => {
  return (
    <Router>
    <Header />
    <main className="py-3">
  <Container>
   <Route exact path = '/' component={HomeScreen} />
   <Route path = '/product/:id' component={ProductScreen} />

      </Container>
    </main>

    <Footer/> 
    </Router>
  )
}

export default App;
