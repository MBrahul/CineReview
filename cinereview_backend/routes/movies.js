const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// TO GET MOVIES -- 

router.get('/allMovies',async(req ,res)=>{
   let movies = await  Movie.find({genres:'Action'});
   res.send(movies);
})

// to get specific genres movie

router.get('/action' , async(req,res)=>{
         let movies = await Movie.find({genres:"Action"});
         res.send(movies);
});


router.get('/comedy' , async(req,res)=>{
   let movies = await Movie.find({genres:"Comedy"});
   res.send(movies);
});

router.get('/thriller' , async(req,res)=>{
   let movies = await Movie.find({genres:"Thriller"});
   res.send(movies);
});

router.get('/horror' , async(req,res)=>{
   let movies = await Movie.find({genres:"Horror"});
   res.send(movies);
});

router.get('/drama' , async(req,res)=>{
   let movies = await Movie.find({genres:"Drama"});
   res.send(movies);
});
// TO DELETE MOVIE ---


router.delete('/deleteMovie/:id',async(req,res)=>{
   try {
      Movie.findByIdAndDelete(req.params.id).then(()=>{
         res.json({status:true});
      });
   } catch (error) {
      res.status(401).json({status:false,error:"internal server error"});
   }
  
})

//to add new movie 

router.post('/addMovie',async(req,res)=>{
   const { title, genres, IMDB_rating,releasedata,imglink } = req.body;
   let newMovie={title,genres,IMDB_rating,releasedata,imglink};
   await Movie.create(newMovie).then(()=>{
      res.json({status:true,
           movie:newMovie});
   })
})





module.exports=router;