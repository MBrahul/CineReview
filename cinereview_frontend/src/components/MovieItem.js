import React, { useContext } from 'react'
import MovieContext from '../context/Movies/MovieContext'

export default function MovieItem(props) {
    const context = useContext(MovieContext);
    const {adminLogin,removeMovie}=context
    const {title,url,genres,rating,date,id}=props

    const handleDeleteMovie =(id)=>{
        removeMovie(id);
    }
    return (
        <>

            <div className="card d-flex ">
                <div className="imgbox">
                
                    <img src={url} alt="" />
                    <span className="badge rounded-pill bg-danger rating">{rating+" "}<i className="fa-solid fa-star"></i></span>
                    <h4 style={{color:'white'}}>{title}</h4>
                  

                </div>
                <div className="content">
                <p className='d-inline' style={{
                        color:'white'
                    }}>Genres:{" "+genres}</p>
                   
                <p>Release Date:{" "+date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()}</p>

                {adminLogin?<button type="button" className="btn btn-outline-danger" onClick={()=>handleDeleteMovie(id)}>Delete</button>:""}
                </div>
            </div> </>
    )
}
