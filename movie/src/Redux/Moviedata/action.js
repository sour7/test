//  action type
export const LISTING_LOADING= 'LISTING_LOADING';
export const LISTING_SUCCESS= 'LISTING_SUCCESS';
export const LISTING_FAILURE= 'LISTING_FAILURE';


// ACTION CREATOR

export const listingLoading=()=>({
    type:LISTING_LOADING
});
export const listingSuccess=(payload)=>({
    type: LISTING_SUCCESS,
    payload

});

export const listingFailure=()=>({
    type:LISTING_FAILURE
})

export const listing= ({name,price, ratings, release_date })=>(dispatch)=>{
    dispatch(listingLoading())
    fetch(`http://localhost:8000/create`,{
        method:"POST",
        body:JSON.stringify({name,price, ratings, release_date }),
        headers:{
            "Content-Type":"application/json"
        }
       
    }) .then((res)=> res.json())
    .then((res)=> dispatch(listingSuccess({name,price, ratings, release_date })))
    .catch((e)=> dispatch(listingFailure()))


}