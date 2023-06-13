import React, { useState , useReducer, useRef } from 'react'
import Button from '../UI/Button/Button'
import classes from './Login.module.css';
import validation from './RegisterValidation';
import { Link } from 'react-router-dom';


// const emailReducer = (state, action) => {
//   if (action.type === 'USER_INPUT') {
//     return { value: action.val, isValid: action.val.includes('@') };
//   }
//   if (action.type === 'INPUT_BLUR') {
//     return { value: state.value, isValid: state.value.includes('@') };
//   }
//   return { value: '', isValid: false };
// };

// const passwordReducer = (state, action) => {
//   if (action.type === 'USER_INPUT') {
//     return { value: action.val, isValid: action.val.trim().length > 6 };
//   }
//   if (action.type === 'INPUT_BLUR') {
//     return { value: state.value, isValid: state.value.trim().length > 6 };
//   }
//   return { value: '', isValid: false };
// };
export const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  // const [emailState, dispatchEmail] = useReducer(emailReducer, {
  //   value: '',
  //   isValid: null,
  // });
  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
  //   value: '',
  //   isValid: null,
  // });

  const [errors, setErrors] = useState([]);

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  // const validateEmailHandler = () => {
  //   dispatchEmail({ type: 'INPUT_BLUR' });
  // };

  // const validatePasswordHandler = () => {
  //   dispatchPassword({ type: 'INPUT_BLUR' });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-ECF0F3 p-3 rounded w-25'>
            <form action ="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input placeholder='Enter Email' 
                    onChange={handleInput} className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input  placeholder='Enter Password' 
                    onChange={handleInput} className='form-control rounded-0' />
                </div>
                <Button type="submit" classname={classes.btn}><strong>Log in</strong></Button>
            </form>
            <p>Don't have account? Create one below.</p>
            <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link> 
        </div>
    </div>
  )
}
