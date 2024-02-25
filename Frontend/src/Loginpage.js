import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';
function Loginpage()
{
    const[values,setValues]=useState({
        username:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
    }
    if (errors.username === '' && errors.password === '') {
        axios.post('http://localhost:3000', values)
          .then(res => {
            if(res.data==="SUCCESS")
            {
                navigate('/home');
            }
            else{
                alert("No record exist");
            }
          })
          .catch(err => console.log(err));
      }
    
    return(
    
    <div className='d-flex justify-content-center align-items-center bg-white vh-100'>
        {/* <divclassName='log'>
        <h1>Login</h1>
        <hr></hr>
        </div> */}
        <div className='bg-white p-3 rounded-5'>
        <h2>Welcome,</h2>
        <h3>Login in Book Store</h3>
        <br></br>
        <br></br>
            <form className='row g-3' action="" onSubmit={handleSubmit}>
            <div className="mb-3 row">
                <label htmlFor="username" className="col-sm-2 col-form-label">UserName :</label>
                <div className="col-sm-10">
                    <input type="text" name='username' className="form-control" id="text" placeholder='UserName' onChange={handleInput}/>
                    {errors.username && <span className='text-danger'>{errors.username}</span>}
                </div>
                
            </div>
            <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password :</label>
                <div className="col-sm-10">
                    <input type="password" name='password' className="form-control" id="password" placeholder='PassWord' onChange={handleInput}/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
            </div>
            <div className='col'>
                <button type='submit' className='btn btn-primary'>Log in</button>
                <Link to="/Register" className='btn btn-primary text-decoration-none'>New User</Link>
            </div>
            </form>
            
        </div>
        
    </div>
    
    )
}
export default Loginpage;