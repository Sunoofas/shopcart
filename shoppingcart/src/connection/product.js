import React, { useState, useEffect} from "react";
import axios from "axios";
import config from "../services/config.json";


function Product(){
      const [productitems, setProductitems] = useState([]);
      useEffect()
        const getProduct = () =>{ try{

        
           const res = axios.get(`${config.api_base_url}`)
             .then(res => {
                console.log(res.data)
             })
            }catch(error){
                console.error(error)
             }
        }
     

      const addProduct =() =>{try{

      
       const res = axios.post(`${config.api_base_url}/add`)
        .then(res=>{
            console.log(res.data)
        })
      }catch(error ){
            console.error(error)
        }
      }
}
      export default Product;
    