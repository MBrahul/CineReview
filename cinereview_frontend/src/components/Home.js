import React, { useContext } from 'react'
import MovieContext from '../context/Movies/MovieContext'
import Login from './Login'
import Movies from './Movies'

export default function Home() {

 
  const context = useContext(MovieContext)
  const {login ,adminLogin}=context;

 

  if(login||adminLogin){
    return(
      <Movies/>
    )
  }
  else{
    return(
    <Login/>
    )
  }
}
