import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import { listing } from '../Redux/Moviedata/action'
 import {Movies} from "./Movies"
 


 export  const Listing = () => {
     const[name,setName]= useState("")
     const[price,setPrice]= useState("")
     const[ratings,setRatings]= useState("")
     const [release_date, setRelease_date]= useState("")

     const add = useSelector((state) => state.listingReducer)
     console.log(add)
     const dispatch= useDispatch()

    
const handlelisting= ()=>{
    const payload= {
        name, price, ratings, release_date
    };
   dispatch(listing(payload))
   alert("product updated");
   setName("")
   setPrice("")
   setRatings("")
   setRelease_date("")
  

}


  return (
    <div>
        <div style={{"marginLeft":"10%", "marginBottom":"10px"}}>
        <h1>create</h1>
        <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} style={{width:"200px","marginBottom":"10px"}}/> <br />
        <input type="text" placeholder="PRICE" value={price} onChange={(e)=>setPrice(e.target.value)} style={{width:"200px","marginBottom":"10px"}}/> <br />
        <input type="text" placeholder="rating" value={ratings} onChange={(e)=>setRatings(e.target.value)} style={{width:"200px","marginBottom":"10px"}}/> <br />
        <input type="text" placeholder="date" value={release_date} onChange={(e)=>setRelease_date(e.target.value)} style={{width:"200px","marginBottom":"10px"}}/> <br />
      
       
        <button style={{width:"200px" , "marginBottom":"10px", "cursor":"pointer"}} onClick={handlelisting}>submit</button>
      
        
        </div>
      
       <Movies/>
    </div>
  )
  }





