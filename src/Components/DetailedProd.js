import React from 'react'
import {useParams} from 'react-router-dom'; 
import Shoes from "./Shoes.json"

const DetailedProd = () => {

// console.log(Shoes)

const {productID} = useParams();
// console.log("productID: ", productID)

const shoe = Shoes[productID]

return(
    <div>
              <h4>{shoe.name}</h4>
              <img src={shoe.img} alt="shoe" height="400px" width="400px"/>
    </div>
  )
}

export default DetailedProd
