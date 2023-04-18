import logo from "../images/cinereview.png"
import { useSelector, useDispatch } from "react-redux"
import { actionCreators } from "../state";
export default function Navbar() {

const searchString = useSelector(state=>state.searchString);
const page=useSelector(state=>state.page);
const totalPages=useSelector(state=>state.totalPages);
const dispatch = useDispatch();

const changeSearchString=(e)=>{
   dispatch(actionCreators.searchString(e.target.value))
}


const searchMovies = async () => {
 if(searchString!==""){
  dispatch(actionCreators.setProgress(10));
  dispatch(actionCreators.updateSearching(true));
  dispatch(actionCreators.setProgress(20));
  dispatch(actionCreators.resetPage());
  dispatch(actionCreators.setProgress(30));
  var response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${searchString}&page=${page}`);
  dispatch(actionCreators.setProgress(60));
  var json = await response.json();
  dispatch(actionCreators.setTotalPages(json.total_pages))
  console.log(totalPages);
  dispatch(actionCreators.updateMovies(json.results));
  dispatch(actionCreators.setProgress(100));
  dispatch(actionCreators.setTotalPages(json.total_pages));
  dispatch(actionCreators.setProgress(0));
 }
}

const getMovies = async (page) => {
  dispatch(actionCreators.setProgress(10));
      dispatch(actionCreators.searchString(""))
      dispatch(actionCreators.setProgress(40));
      dispatch(actionCreators.updateSearching(false));
      dispatch(actionCreators.setProgress(70));
      dispatch(actionCreators.resetPage());
      let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US&page=${page}`);
      dispatch(actionCreators.setProgress(90));
      let json = await response.json();
      dispatch(actionCreators.updateMovies(json.results));
      dispatch(actionCreators.setProgress(100));
      dispatch(actionCreators.setTotalPages(json.total_pages));
      dispatch(actionCreators.setProgress(0));
 
}


  return (
    <>
      <div className="Navbar">
        <div className="nav-container1">
            <img src={logo} alt="" />
            <h1 onClick={getMovies} style={{cursor:"pointer"}} >CineReview</h1>
        </div>
        <div className="nav-container2">
          <input type="text" name="search" id="search" placeholder ="Search Movies ... " value={searchString} onChange={changeSearchString} />
          <button id="search-btn" onClick={searchMovies} >Search</button>
        </div>
      </div>
    </>
  )

}
