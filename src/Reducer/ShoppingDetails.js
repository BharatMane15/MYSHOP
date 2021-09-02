const initialData={
    products:[]
}

export const shoppingDetails=(state=initialData,{type,payload})=>{
    switch(type){
        case "SET_PRODUCT":
            return {...state,products:payload};
        default:
            return state;
    }
};

export const selectedProductReducer=(state={},{type,payload})=>{
      switch(type){
          case "SELECTED_PRODUCT":
              return {...state, ...payload};
          case "REMOVE_PRODUCT":
              return {};
          default:
              return state;
      }
};