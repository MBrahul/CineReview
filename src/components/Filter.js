import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state';



export default function Filter() {

  
  const page = useSelector(state => state.page);
  const gridView = useSelector(state=>state.gridView);
  const flexView = useSelector(state=>state.flexView);
  const dispatch = useDispatch();


  const changeGenres=(e)=>{
    dispatch(actionCreators.updateGenres(e.target.id));
    getMovies(e.target.id);
  }





  const getMovies = async (genres) => {

    dispatch(actionCreators.setProgress(10));

    dispatch(actionCreators.updateSearching(false));

    dispatch(actionCreators.setProgress(20));
    dispatch(actionCreators.resetPage());
    var response = await fetch(`https://api.themoviedb.org/3/movie/${genres}?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US&page=${page}`);

    dispatch(actionCreators.setProgress(50));
    var json = await response.json();
    
    dispatch(actionCreators.setProgress(80));

    dispatch(actionCreators.updateMovies(json.results));

    dispatch(actionCreators.setProgress(100));

    dispatch(actionCreators.setTotalPages(json.total_pages));

    dispatch(actionCreators.setProgress(0));



  }



  return (
    <div className='filter-section'>
      <div style={{ display: 'flex' }}>

        <div className="filter-container1">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item"  href="#"></a></li>
            <li><a className="dropdown-item" id='popular' href="#" onClick={changeGenres}  >Popular</a></li>
            <li><a className="dropdown-item" id='top_rated'  href="#" onClick={changeGenres} >Top Rated</a></li>
            <li><a className="dropdown-item" id='upcoming' href="#"  onClick={changeGenres} >Upcoming</a></li>
            <li><a className="dropdown-item" href="#"></a></li>
          </ul>
        </div>
      </div>

      <div className="filter-container2">
      <ion-icon className="ion" id={gridView?'active':""} name="grid-outline"  onClick={()=>{if(!gridView){
          dispatch(actionCreators.setFlexView(false));
          dispatch(actionCreators.setGridView(true));
        }}}   ></ion-icon>

        <ion-icon className=' ion ' id={flexView?'active':''} name="albums-outline" onClick={()=>{if(gridView){
          dispatch(actionCreators.setFlexView(true));
          dispatch(actionCreators.setGridView(false));
        }}} ></ion-icon>

      </div>
    </div>
  )
}
