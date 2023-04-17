import '../App.css';
import cart from '../connection/cart';
import axios from "axios";
import config from "../services/config.json";
function ProductList({product}) {
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
 
 
     const addToCart = (productItem)=>{
         try{
        const res= axios.post(`${config.api_base_url}/api/items/add`,{productItem})
         .then(res => {
             console.log(res.data)
         })
     }
         catch(error) {
             console.error(error)
         }
     };
 
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item'>
                                <img src={productItem.url} width="100%" />
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList