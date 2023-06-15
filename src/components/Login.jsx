import React, { useState , useReducer, useRef } from 'react'
import Button from '../UI/Button/Button'
import classes from './Login.module.css';
import validation from './LoginValidation';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();
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

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/login', values)
      .then(res => {
          if (res.data === "Success"){
            navigate('/profile');
          } else {
            alert("No record Existed");
          }
      })
      .catch(err => console.log(err));
    }

  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Log-In</h2>
            <form action ="" onSubmit={submitHandler}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                  <label htmlFor="password"><strong>Password</strong></label>                    
                  <input type="password" placeholder='Enter Password' name='password'                    
                  onChange={handleInput} className='form-control rounded-0'/>                    
                  {errors.password && <span className='text-danger'> {errors.password}</span>}         
                </div>
                <Button type="submit" classname={classes.btn}><strong>Sign up</strong></Button>
            </form>
            <p>You agree to terms amd policies</p>
            <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link> 
        </div>
    </div>
  )
}
