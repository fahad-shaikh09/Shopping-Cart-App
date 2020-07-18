import React from 'react'
import Shoes from "./Shoes.json"
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2>Products Catalog!</h2> 
      
      <div>

       {Object.keys(Shoes).map(prod => {
         const shoe = Shoes[prod]
          return(
            <Link 
            to={`/products/${prod}`} 
            key={shoe.name} >
              <h4>{shoe.name}</h4>
              <img src={shoe.img} alt="shoe" height="200px" width="200px"/>             
            </Link>
          )
        })} 
         
        
      </div>



    </div>
  )
}

export default Products
