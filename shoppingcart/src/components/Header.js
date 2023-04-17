import '../App.css';
//import Axios from 'axios';
import {useEffect, useState} from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
//let Link= require("react-router-dom");

function Header(props) {
  
    /*Axios({
        method: "GET",
        url: "http://localhost:3000",
        header:{
          "Content-type": "application/json"
        }
    }).then(res => {
      console.log(res.data.message);
    });
    const [message, setMessage] = useState("");
    useEffect(() =>{
       fetch("http://localhost:8000/message")
         .then((res) => res.json())
         .then((data) => setMessage(data.message));
    }, [])*/
  
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >India-Mart-Online-shopping</div>
            <div className='header-links'>
           <ul>
              <li>
                <Link to ="/signup">Signup</Link>
                
               
              </li> 
           </ul>
           <button onClick={() => props.handleShow(true)}>Cart
           <sup> {props.count} </sup>
           </button>
           
        </div>
           
           
        </div>
        
    );
}

export default Header;
