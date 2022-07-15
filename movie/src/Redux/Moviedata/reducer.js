import {LISTING_LOADING,LISTING_SUCCESS, LISTING_FAILURE}  from "./action"

const initState= {
    loading:false,
    error:false,
   name:"",
    price:"",
    ratings:"",
    release_date:"",
   


}
export const listingReducer = (store= initState,{type, payload})=>{
    switch(type){
        case LISTING_LOADING:
            return{
                ...store,
                loading:true
            }
            case LISTING_SUCCESS:
                return{
                    ...store,
                    loading:false,
                    name:payload.name,
                    ratings:payload.ratings,
                    release_date:payload.release_date,
                    price:payload.price
   
   }
   case LISTING_FAILURE:
       return{
           ...store, 
           error:true
       }
     
       default:
           return store
    }
}