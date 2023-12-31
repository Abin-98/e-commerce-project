import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import classes from './ProductDetails.module.css'
import CartContext from '../../../Context/cart-context'

const ProductDetails = (props) => {
    const cartCtx=useContext(CartContext)
    const params=useParams();
    const arr=cartCtx.actualItems.filter((i)=>{
      if(i.id===params.productId)
      return i;
    })
    console.log(params.productId)
  return (
    <div>
      <h1>Product Details...</h1>
      <p>{params.productId}</p>
      {arr.review}
      {arr.otherImages}
    </div>
  )
}

export default ProductDetails
