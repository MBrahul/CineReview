const mongoose = require('mongoose')
const { Schema } = mongoose;

const movieSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    imglink:{
        type:String,
    },
    IMDB_rating:{
        type:String,
    },
    genres:{
        type:String,
        default:'Animation'
    },
  
    releasedata:{ 
        type: Date,
         },
  });

  const Movie = mongoose.model('movie',movieSchema)

  module.exports=Movie;