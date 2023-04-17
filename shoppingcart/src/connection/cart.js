import React, {useState, useEffect} from "react";
import axios from "axios";
import config from "../services/config.json";

function Cart(){


    const getCart = ()=>{try{

    
       const res= axios.get(`${config.api_base_url}`)
        .then(res =>{
            console.log(res.data)
        })
    }
        catch(error)
          {
            console.error(error);
        }
    };


    const addCart = ()=>{
        try{
       const res= axios.post(`${config.api_base_url}/api/items/add`)
        .then(res => {
            console.log(res.data)
        })
    }
        catch(error) {
            console.error(error)
        }
    };

    const deleteCart =(product_id)=>{try{

    
       const res = axios.delete(`${config.api_base_url}/${product_id}/delete`)
        .then(res =>{
            console.log(res.data)
        })
    }catch(error){
            console.error(error)
        }
    };


    function increaseItem(product_id) {
          const response=axios.put(`${config.api_base_url}/increase/${product_id}`,{ product_id});
          return response;
    }
    function decreaseItem(product_id){
        const response = axios.put(`${config.api_base_url}/decrease/${product_id}`, {product_id});
        return response;
    }
}
 export default Cart;
