import React from 'react'

export default function MovieItem2(props) {
     const { title, poster_path,overview , release_date,language,rating} = props;
  return (
    <>
     <div className="movieitem2">
     <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
     <div className="movie-info">
        <h4>{title}</h4>
        <div className="rating">
            <p>{rating}</p>
            <ion-icon name="star-outline"></ion-icon>
        </div>
        <p><b>Overview : </b>{overview}</p>
        <p> Language : {language}</p>
        <p> Release Date :  {release_date}</p>
     </div>
     </div>
   
    </>
  )
}
