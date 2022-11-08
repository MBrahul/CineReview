import React, { useState } from 'react'
import AdminLogin from './AdminLogin';

export default function AddMovie() {
    const [movie , setMovie]=useState({
        title:"",
        IMDB_rating:"",
        releasedata:"",
        genres:"",
        imglink:''
    })
    const onChange =(e)=>{
        setMovie({...movie,[e.target.name]:e.target.value});
    }

    const addMovie=()=>{

    }
    if(AdminLogin){
  return (
    <>
    <div className='container my-3 login-container'>
            <h3 className='text-center' style={{ color: "white" }}>Enter Movie Details</h3>

            <form>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "white" }}>Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title"
                        value={movie.title} onChange={onChange} />

                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "white" }}>IMDB-rating</label>
                    <input type="IMDB_rating" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={movie.IMDB_rating} onChange={onChange} />

                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "white" }}>Genres</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="genres" onChange={onChange} value={movie.genres} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "white" }} >Poster-Link</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="imglink" onChange={onChange} value={movie.imglink} />
                </div>
                <button type="submit" className="btn  btn-outline-danger" onClick={addMovie} >Add Movie</button>
              
            </form>

        </div>
    </>
  )}
  else{
    <p>some error occured</p>
  }
}
