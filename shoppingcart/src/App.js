import Header from './components/Header';
import './App.css';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import config from './services/config.json'

function App() {

  // Axios({
  //     method: "GET",
  //     url: "http://localhost:3000",
  //     header:{
  //       "Content-type": "application/json"
  //     }
  // }).then(res => {
  //   console.log(res.data.message);
  // });

  const  [message, setMessage] = useState("");
  useEffect(() =>{
     fetch("http://localhost:8000/message")
       .then((res) => res.json())
       .then((data) => setMessage(data.message));
  }, []);

  

  const [product, setProduct] = useState([
    {

      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
     
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
     
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = async(data) => {
    setCart([...cart, { ...data, quantity: 1 }])
    const response = await axios.post(`${config.api_base_url}/api/items/add`)
    console.log("response cart",response)
  }

  const handleShow = (value) => {
    setShowCart(value)
  }
  return (
    <div>
     <Header count = {cart.length}
        handleShow={handleShow}></Header>
        <h1>{message}</h1>
        {
            showCart?
            <CartList cart= {cart} ></CartList>:
            <ProductList product={product} addToCart={addToCart} ></ProductList>        
        }
    </div>
  );
}

export default App;
