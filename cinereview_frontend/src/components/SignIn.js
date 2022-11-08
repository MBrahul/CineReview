import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import MovieContext from '../context/Movies/MovieContext';
import Home from './Home';


export default function SignIn() {
    const context = useContext(MovieContext);
    const { addUser ,login} = context;
    const [data, setData ] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ""
    })

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const createUser = (e) => {
        e.preventDefault();
        if (data.password !== data.confirm_password) {
            alert('password and confirm-password does not match');
        }
        else {
            addUser(data.name, data.email, data.password);
            setData({
                name: '',
                email: '',
                password: '',
                confirm_password: ""
            });
        }


    };

    if(login){
        return(
            <Home/>
        )
    }

    else{
    return (
        <div className='container my-3 login-container'>
            <h3 className='text-center' style={{ color: "white" }}>Create new account</h3>

            <form>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "white" }}>Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"
                        value={data.name} onChange={onChange} />

                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "white" }}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "white" }}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onChange} value={data.password} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "white" }} >Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="confirm_password" onChange={onChange} value={data.confirm_password} />
                </div>
                <button type="submit" className="btn  btn-outline-danger" onClick={createUser} >Create</button>
                <p className='my-3'>OR</p>
                <p className='d-inline'>Have an account ?</p>
                <Link to="/" className='mx-2'>Login here</Link>
              
            </form>

        </div>
    )
    }
}
