const Movie= require("../models/Movie")
const express= require('express')
const router= express.Router()


router.post("/create", async(req,res)=>{
    const movie = new Movie(req.body)
     try{
        await movie.save()
       
        res.status(201).send({movie})
    }catch(e){
        res.status(500).send(e)
    }
});

router.get("/allmovies",async(req,res)=>{
    const movie = await Movie.find()
	res.send(movie)
})




module.exports= router;