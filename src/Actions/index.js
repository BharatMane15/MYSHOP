export const setProducts=(products)=>{
    return{
        type:"SET_PRODUCT",
        payload:products,
    }
}
export const selectedProduct=(products)=>{
    return{
        type:"SELECTED_PRODUCT",
        payload:products,
    }

}
export const removeProduct=()=>{
    return{
        type:"REMOVE_PRODUCT"
    }
}