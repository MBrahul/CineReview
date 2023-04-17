import React, { useEffect } from 'react'
import MovieItem from './MovieItem'
import MovieItem2 from './MovieItem2';
import { actionCreators } from '../state/index';
import { useSelector, useDispatch } from 'react-redux';



export default function Movies() {

    const page = useSelector(state => state.page);
    const movies = useSelector(state => state.movies);
    const searching = useSelector(state => state.searching);
    const searchString = useSelector(state => state.searchString);
    const gridView = useSelector(state => state.gridView);
    const totalPages = useSelector(state=>state.totalPages);
    const dispatch = useDispatch();




    const getMovies = async (page) => {
        if (searching) {
            let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${searchString}&page=${page}`);
            let json = await response.json();
            dispatch(actionCreators.updateMovies(json.results));
            dispatch(actionCreators.setTotalPages(json.total_pages));
            console.log(totalPages);
        }

        else {
            let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US&page=${page}`);
            let json = await response.json();
            dispatch(actionCreators.updateMovies(json.results));
            dispatch(actionCreators.setTotalPages(json.total_pages));
        }
    }


    const handleNextClick = () => {
        getMovies(page + 1);
        dispatch(actionCreators.nextPage(1))
        window.scrollTo(0, 0);
    }
    const handlePrevClick = () => {
        getMovies(page - 1);
        dispatch(actionCreators.previousPage(1))

        window.scrollTo(0, 0);
    }

    useEffect(() => {
        getMovies(page);
    },[]);


  if(gridView){
    return (

        <>
            <div className="movies-container">
                <div className="grid-view">
                {
                    movies.map((element) => {
                        if (movies.length !== 0) {
                            return (
                                <MovieItem key={element.id} title={element.original_title} poster_path={element.poster_path} genres={null} rating={element.vote_average} date={new Date(element.release_date)} id={element.id} />
                            )
                        }
                        else {
                            return (<h4 style={{ color: "white" }}>Loading...</h4>)
                        }
                    })

                }
                </div>
            </div>

            <div className="btn-container">

                <button type="button" className="btn btn-outline-secondary" onClick={handlePrevClick} disabled={page === 1}>&larr; Previous</button>
                <button type="button" className="btn btn-outline-danger" onClick={handleNextClick} disabled={page === totalPages} >Next &rarr;</button>

            </div>
        </>

    )
  }
  else{
    return (

        <>
            <div className="movies-container">
                <div className="flex-view">
                {
                    movies.map((element) => {
                        if (movies.length !== 0) {
                            return (
                                <MovieItem2 key={element.id} title={element.original_title} poster_path={element.poster_path}  rating={element.vote_average} release_date={ element.release_date} id={element.id} language={element.original_language} overview={element.overview} />
                            )
                        }
                        else {
                            return (<h4 style={{ color: "white" }}>Loading...</h4>)
                        }
                    })

                }
                </div>
            </div>

            <div className="btn-container">

                <button type="button" className="btn btn-outline-secondary" onClick={handlePrevClick} disabled={page === 1}>&larr; Previous</button>
                <button type="button" className="btn btn-outline-danger" onClick={handleNextClick} disabled={page === totalPages} >Next &rarr;</button>

            </div>
        </>

    )  
  }
}




