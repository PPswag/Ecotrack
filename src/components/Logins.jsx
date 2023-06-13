import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import classes from './Login.module.css';
import { Link } from "react-router-dom";


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
    const [formIsValid, setFormIsValid] = useState(false);
  
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
      value: '',
      isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: '',
      isValid: null,
    });
  
    // const authCtx = useContext(AuthContext);
  
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
  
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
  
      // setFormIsValid(
      //   event.target.value.includes('@') && passwordState.isValid
      // );
    };
  
    const passwordChangeHandler = (event) => {
      dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  
      // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
    };
  
    const validateEmailHandler = () => {
      dispatchEmail({ type: 'INPUT_BLUR' });
    };
  
    const validatePasswordHandler = () => {
      dispatchPassword({ type: 'INPUT_BLUR' });
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
    //   if (formIsValid) {
    //     authCtx.onLogin(emailState.value, passwordState.value); 
    //   } else if (!emailIsValid) {
    //     emailInputRef.current.focus();
    //   } else {
    //     passwordInputRef.current.focus();
    //   }
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
                        {/* <input  placeholder='Enter Password' 
                        onChange={passwordChangeHandler} className='form-control rounded-0' /> */}
                    </div>
                    <Button type="submit" classname={classes.btn}><strong>Log in</strong></Button>
                </form>
                <p>Don't have account? Create one below.</p>
                <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link> 
            </div>
          </div>
    );
  };
  
