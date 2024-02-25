import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './RegisterValidation';
import axios from 'axios';

function Register() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));

    if (errors.firstname === '' && errors.lastname === '' && errors.username === '' && errors.password === '') {
      axios.post('http://localhost:3000/Register', values)
        .then(res => {
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-white vh-100'>
      <div className='bg-white p-3 rounded-5'>
        <h2>Welcome,</h2>
        <h3>Register in Book Store</h3>
    <br></br>
    <br></br>
        <form className='row g-3' action="" onSubmit={handleSubmit}>
        <div className="mb-3 row">
            <label htmlFor="text3" className="col-sm-2 col-form-label">FirstName :</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="text3" name='firstname' placeholder='First Name' onChange={handleInput}/>
                {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="text1" className="col-sm-2 col-form-label">LastName :</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="text1" name='lastname' placeholder='Last Name' onChange={handleInput}/>
                {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="text2" className="col-sm-2 col-form-label">UserName :</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="text2" name='username' placeholder='UserName' onChange={handleInput}/>
                {errors.username && <span className='text-danger'>{errors.username}</span>}
            </div>
        </div>
        <div className="mb-5 row">
            <label htmlFor="pass" className="col-sm-2 col-form-label">Password :</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" id="pass" name='password' placeholder='PassWord' onChange={handleInput}/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
        </div>
        <div className='col'>
            <button type='submit' className='btn btn-primary'>Register</button>
            <Link to="/" className='btn btn-primary text-decoration-none'>Back to Login</Link>
        </div>
        </form>
        
    </div>
    
</div>
    )
}
export default Register;
