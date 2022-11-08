import React, { useContext, useState} from 'react'
import { Link} from 'react-router-dom'
import MovieContext from '../context/Movies/MovieContext';
import Home from './Home';



export default function AdminLogin() {
    const context = useContext(MovieContext)
    const {verifyAdmin ,adminLogin}=context;
    const [data , setData]=useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        setData({...data ,[e.target.name]:e.target.value});
    }
    const handleAdminLogin=(e)=>{
        e.preventDefault();
        verifyAdmin(data.email,data.password);
        setData({ email:'',
        password:''});
    }

    if(!adminLogin){
    return (
        <>
        <div className="container login-container">
            <h3 className='text-center'>---Admin Login---</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={data.email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={data.password} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-outline-danger" onClick={handleAdminLogin}>Log In</button>
                <p className='my-3' style={{
                    "display": "block",
                    "margin": "5px 0px"
                }} >User Login: <Link to="/signIn">Here</Link></p>
            </form>
        </div>
        </>
    )}
    else{
        return(
            <Home/>
        )
    }
}
