import React, { useContext, useEffect } from 'react'
import MovieContext from '../context/Movies/MovieContext'
import MovieItem from './MovieItem'
import { Link } from 'react-router-dom';

export default function Movies() {

    const context = useContext(MovieContext);
    const { movies, getAllMovies, filter, setFilter, actionMovies, comedyMovies, dramaMovies, horrorMovies, thrillerMovies , searchMovie , query,setQuery } = context;

    const handleSearch=()=>{
            console.log('in handleSearch');
            searchMovie();
    }

    useEffect(() => {
        getAllMovies();
    }, []);

    const getActionMovies = () => {
        setFilter('Action')
        actionMovies();
    }
    const getComedyMovies = () => {
        setFilter('Comedy')
        comedyMovies();
    }
    const getThrillerMovies = () => {
        setFilter('Thriller')
        thrillerMovies();
    }
    const getHorrorMovies = () => {
        setFilter('Horror')
        horrorMovies();
    }
    const getDramaMovies = () => {
        setFilter('Drama')
        dramaMovies();
    }

    const onChange =(e)=>{
        setQuery(e.target.value);
    }
    return (
        <div className='Movies my-5'>

            <div className="filter">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {filter}
                    </button>
                    <ul className="dropdown-menu drop" aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item" onClick={getActionMovies}>Action</Link></li>
                        <li><Link className="dropdown-item" onClick={getComedyMovies} >Comedy</Link></li>
                        <li><Link className="dropdown-item" onClick={getThrillerMovies} >Thriller</Link></li>
                        <li><Link className="dropdown-item" onClick={getHorrorMovies} >Horror</Link></li>
                        <li><Link className="dropdown-item" onClick={getDramaMovies} >Drama</Link></li>
                    </ul>
                </div>
            </div>


            <div className="movie-container">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'white' }}>Search Movie</label>
                    <input type="text" name='search' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: '#2D3339' ,color:"white"}} placeholder='search...'  value={query} onChange={onChange}/>
                </div>
            
                   
                <div className="row">
                        {
                            movies.map((element) => {
                                if(movies.length!==0){
                                return (
                                    <MovieItem key={element._id} title={element.title} url={element.imglink} genres={element.genres} rating={element.IMDB_rating} date={new Date(element.releasedata)} id={element._id} />
                                )}
                                else{
                                    return( <h4 style={{color:"white"}}>Loading...</h4> )
                                }
                            })
                         
                        }
                    </div>
               

            </div>

            <div className='btn-search'>
            <button type="button" className="btn btn-outline-danger"  onClick={handleSearch}>Search</button>
            </div>

        </div>
    )
}




