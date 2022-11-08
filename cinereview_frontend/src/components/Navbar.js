import React, { useContext, useState } from 'react'
import MovieContext from '../context/Movies/MovieContext'

export default function Navbar() {
  const context = useContext(MovieContext);
  const { user, setLogin, removeUser, adminLogin, admin, setAdminLogin, login } = context;

  const handleLogOut = () => {
    if (login) {
      setLogin(false);
    }
    else if (adminLogin) {
      setAdminLogin(false);
    }

  }

  const handleDeleteAccount = () => {
    let response = window.confirm('Are you sure to delete Your Account?');
    if (response) {
      removeUser(user._id);
    }

  }

  const [movie, setMovie] = useState({
    title: "",
    IMDB_rating: "",
    releasedata: "",
    genres: "",
    imglink: ''
  })
  const onChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  }

  const addMovie = () => {

  }

  return (
    <>
      <div className='Mynavbar'>
        <h3 className='text-center d-inline'>CineReview</h3>
        {user.name.length > 1 ? <i className="fa-solid fa-user userLogo" data-bs-toggle="modal" data-bs-target="#exampleModal"></i> : ''}
        {admin.name.length > 1 ? <i className="fa-solid fa-user userLogo" data-bs-toggle="modal" data-bs-target="#exampleModal"></i> : ''}

      </div>

      <div className="modal modal1 fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog user-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">{adminLogin ? "Admin-Info:" : 'User-Info:'}</h5>

            </div>
            <div className="modal-body">
              {adminLogin ? <div>
                <p>Your Name:{" " + admin.name}</p>
                <p>Your email:{" " + admin.email}</p>
              </div> :
                <div>
                  <p>Your Name:{" " + user.name}</p>
                  <p>Your email:{" " + user.email}</p>
                </div>}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={handleLogOut}>Log out</button>
              {adminLogin ? <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#addmovie">Add New Movie</button> : <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={handleDeleteAccount}>Delete account</button>}

            </div>
          </div>
        </div>
      </div>

      {/* modal for adding movie  */}
      <div className="modal fade" id="addmovie" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter Movie Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" >Title</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title"
                    value={movie.title} onChange={onChange} />

                </div>


                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">IMDB-rating</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='IMDB_rating' value={movie.IMDB_rating} onChange={onChange} />

                </div>


                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label" >Genres</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" name="genres" onChange={onChange} value={movie.genres} />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label" >Poster-Link</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" name="imglink" onChange={onChange} value={movie.imglink} />
                </div>
                

              </form>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn  btn-outline-danger" data-bs-toggle="modal" data-bs-target="#addmovie" onClick={addMovie} >Add Movie</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )

}
