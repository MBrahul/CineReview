import React, { useState } from "react";
import MovieContext from "./MovieContext";

const MovieState = (props) => {
  const [login, setLogin] = useState(false);
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState('');
  const [filter, setFilter] = useState('Filter');
  const [user, setUser] = useState({
    name: '',
    email: '',
    id: ''
  });
  const [query, setQuery] = useState("");
  const [adminLogin , setAdminLogin]=useState(false);
  const [admin,setAdmin]=useState({
    name:'',
    email:''
  })



//fuctions  
  const addUser = async (name, email, password) => {
    console.log('in add user');
    let userDetails = {
      name: name,
      email: email,
      password: password
    }
    const response = await fetch(`http://localhost:5500/api/auth/createUser`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userDetails)
    });
    const json = await response.json();
    if (json.status) {
      setLogin(true);
      setUser(json.user);
    }
    else {
      alert(json.error);
    }
  };


  // to do 
  const verifyUser = async (email, password) => {
    let userDetails = {
      email: email,
      password: password
    }
    const response = await fetch(`http://localhost:5500/api/auth/login`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userDetails)
    });
    const json = await response.json();
    if (json.status) {
      console.log('user created');
      setLogin(true);
      setUser(json.user);
      getAllMovies();
    }
    else {
      alert('Enter correct credentials');
    }
  }

  const logOut = () => {
    setLogin(false);
    setToken('');

  }

  // for admin
  const verifyAdmin = async (email, password) => {
    let adminDetails = {
      email: email,
      password: password
    }
    const response = await fetch(`http://localhost:5500/api/auth/adminLogin`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(adminDetails)
    });
    const json = await response.json();
    if (json.status) {
      setAdminLogin(true);
      setAdmin(json.admin);
      getAllMovies();
    }
    else {
      alert('Enter correct credentials');
    }
  }

  // delete user
  const removeUser = async (id) => {
    const response = await fetch(`http://localhost:5500/api/auth/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json',
      },
    });
    const json = await response.json();
    if (json.status) {
      setLogin(false);
      setUser({
        name: '',
        email: '',
        id: ''
      });
    }
    else {
      alert('some error occured');
    }
  }





  const getAllMovies = async () => {

    const response = await fetch(`http://localhost:5500/api/movies/comedy`, {
      method: "GET",
      headers: { 'content-type': 'application/json' },
    })
    const json = await response.json()
    // console.log(json);
    setMovies(json);

  }

  // this is only for admin -->

  const removeMovie = async (id) => {
    const response = await fetch(`http://localhost:5500/api/movies/deleteMovie/${id}`, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json',
      },
    });
    const json = await response.json();
    if (json.status) {
        getAllMovies();
    }
    else {
      alert('some internal error occured');
    }
  }


  // for getting movie by genres


  const actionMovies = async () => {
    const response = await fetch(`http://localhost:5500/api/movies/action`, {
      method: "GET",
      headers: { 'content-type': 'application/json' },
    })
    const json = await response.json()
    setMovies(json);

  };


  const comedyMovies = async () => {
    const response = await fetch(`http://localhost:5500/api/movies/comedy`, {
      method: "GET",
      headers: { 'content-type': 'application/json' },
    })
    const json = await response.json()
    setMovies(json);

  };



  const horrorMovies = async () => {
    const response = await fetch(`http://localhost:5500/api/movies/horror`, {
      method: "GET",
      headers: { 'content-type': 'application/json' },
    })
    const json = await response.json()
    setMovies(json);

  };



  const thrillerMovies = async () => {
    const response = await fetch(`http://localhost:5500/api/movies/thriller`, {
      method: "GET",
      headers: { 'content-type': 'application/json' },
    })
    const json = await response.json()
    setMovies(json);

  };

  const dramaMovies = async () => {
    const response = await fetch(`http://localhost:5500/api/movies/drama`, {
      method: "GET",
      headers: { 'content-type': 'application/json' },
    })
    const json = await response.json();
    setMovies(json);

  };

  const searchMovie = async () => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      var searchedmovies = [];
      data.results.forEach((movie) => {
        let sMovie = {
          title: movie.title,
          imglink: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          IMDB_rating: movie.vote_average,
          genres: "",
          releasedata:movie.release_date
        }
        searchedmovies.push(sMovie);
      });
      setMovies(searchedmovies);
      setQuery("");
    }
    catch (e) {
      console.log(e);
    }
  }


  const newMovie=async(movie)=>{

      const response = await fetch(`http://localhost:5500/api/movies/addMovie`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(movie)
    });
    const json = await response.json();
    if (json.status) {
      getAllMovies();
    }
    else {
     
    }
    }

  return (
    <MovieContext.Provider value={{ login, setLogin, getAllMovies, addUser, logOut, token, setToken, movies, filter, setFilter, actionMovies, comedyMovies, dramaMovies, horrorMovies, thrillerMovies, user, setUser, verifyUser, removeUser, query, setQuery, searchMovie ,adminLogin,verifyAdmin,admin,setAdminLogin ,removeMovie ,newMovie}}>
      {props.children}

    </MovieContext.Provider>
  )
}

export default MovieState;