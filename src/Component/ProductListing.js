import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponant from './ProductComponant'
const ProductListing = () => {
    const myProducts = useSelector((state) => state.shoppingDetails.products)
    console.log(myProducts)
    return (<>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      <ProductComponant />
      </div>
     
    </>)
}

export default ProductListing
