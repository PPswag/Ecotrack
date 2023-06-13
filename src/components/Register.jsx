import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import classes from './Login.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Register = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.name === "" && errors.email === "" && errors.password === "") {
        axios.post('http://localhost:8081/signup', values)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-up</h2>
            <form action ="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input placeholder='Enter Name' className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input placeholder='Enter Email' className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input  placeholder='Enter Password' className='form-control rounded-0' />
                </div>
                <Button type="submit" classname={classes.btn}><strong>Sign up</strong></Button>
            </form>
            <p>You agree to terms amd policies</p>
            <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link> 
        </div>
    </div>
  )
}
