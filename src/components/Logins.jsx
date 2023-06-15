import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import classes from './Login.module.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import validation from "./LoginValidation";


const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
  };
  
  const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
  };
  
  export const Logins = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [values, setValues] = useState({
      name: '',
      email: '',
    })
    const [errors, setErrors] = useState({});
    const [formIsValid, setFormIsValid] = useState(false);
  
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
      value: '',
      isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: '',
      isValid: null,
    });
  
  
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();
  
    useEffect(() => {
      console.log('EFFECT RUNNING');
  
      return () => {
        console.log('EFFECT CLEANUP');
      };
    }, []);
  
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
  
    useEffect(() => {
      const identifier = setTimeout(() => {
        console.log('Checking form validity!');
        setFormIsValid(emailIsValid && passwordIsValid);
      }, 500);
  
      return () => {
        console.log('CLEANUP');
        clearTimeout(identifier);
      };
    }, [emailIsValid, passwordIsValid]);
  
    const emailChangeHandler = (event) => {
      dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))

    };
  
    const passwordChangeHandler = (event) => {
      dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  
    };
  
    const validateEmailHandler = () => {
      dispatchEmail({ type: 'INPUT_BLUR' });
    };
  
    const validatePasswordHandler = () => {
      dispatchPassword({ type: 'INPUT_BLUR' });
    };
    // const handleInput = (event) => {
    //   setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    // }
  
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
                <form action ="" onSubmit={submitHandler}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <Input 
                          ref={emailInputRef}
                          id="email" 
                          type="email" 
                          isValid={emailIsValid} 
                          value={emailState.value} 
                          onChange={emailChangeHandler} 
                          onBlur={validateEmailHandler} />
                          {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <Input  
                            ref={passwordInputRef}
                            id="password" 
                            type="password" 
                            isValid={passwordIsValid} 
                            value={passwordState.value} 
                            onChange={passwordChangeHandler} 
                            onBlur={validatePasswordHandler}
                          />
                          {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <Button type="submit" classname={classes.btn}><strong>Log in</strong></Button>
                </form>
                <p>Don't have account? Create one below.</p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link> 
            </div>
          </div>
    );
  };
  
