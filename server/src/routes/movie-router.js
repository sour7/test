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

router.patch('/allmovies/:id', (req, res,next) => {
    Movie.findById(req.params.id)
    .then (result=>{
        res.status(200).json(result)
    }).catch(e=>{
        res.status(500).json({error:e})
    })
})



router.delete('/delete/:id', (req, res,next) => {
    Movie.deleteOne({_id: req.params.id})
    .then (()=>{
        res.status(200).json({
            message: 'Deleted!'
          });
        }
        ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
        })





module.exports= router;