import { useState } from 'react';
import { useFormik } from 'formik';
import './Auth.css';
import { signUpSchema, loginSchema } from '../schema/index';

const signUpInitialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  userprofile: ''
};

const loginInitialValues = {
  email: '',
  password: ''
};

const Auth = () => {

  const signUp = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const login = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const [show, setShow] = useState(false);

  const onClickHandler = () => {
    setShow(!show);
  }

  return (
    <div className='auth-container'>
      <img className='image-wrapper' alt='todo-img' src={require('../../assets/todo.jpg')}></img>
      {(show) ?
        (<div className='auth-content'>
          <form className='auth-form' onSubmit={signUp.handleSubmit}>
            <div className='title'>Sign Up</div>
            <div className='title'>Already have a account? Click here -> <a href='#' className='btn' onClick={onClickHandler}>Login</a></div>
            <div className='form-group d-grid'>
              <label htmlFor='firstname' className='auth-label'>
                Firstname 
                <input id='firstname' 
                  className='auth-input' 
                  type='text'
                  value={signUp.values.firstname}
                  onChange={signUp.handleChange}
                  onBlur={signUp.handleBlur}/>
                {<p className='form-error'>{signUp.errors.firstname}</p>}
              </label>
              <label htmlFor='lastname' className='auth-label'>
                Lastname 
                <input id='lastname' 
                  className='auth-input' 
                  type='text'
                  value={signUp.values.lastname}
                  onChange={signUp.handleChange}
                  onBlur={signUp.handleBlur}/>
                {<p className='form-error'>{signUp.errors.lastname}</p>}
              </label>
              <label htmlFor='email' className='auth-label'>
                Email 
                <input id='email' 
                  className='auth-input' 
                  type='email'
                  value={signUp.values.email}
                  onChange={signUp.handleChange}
                  onBlur={signUp.handleBlur}/>
                {<p className='form-error'>{signUp.errors.email}</p>}
              </label>
              <label htmlFor='password' className='auth-label'>
                Password 
                <input id='password' 
                  className='auth-input' 
                  type='password'
                  value={signUp.values.password}
                  onChange={signUp.handleChange}
                  onBlur={signUp.handleBlur}/>
                {<p className='form-error'>{signUp.errors.password}</p>}
              </label>
              <label htmlFor='userprofile' className='auth-label'>
                User Profile 
                <input id='userprofile' 
                  className='auth-input' 
                  type='file'
                  value={signUp.values.userprofile}
                  onChange={signUp.handleChange}
                  onBlur={signUp.handleBlur}/>
                {<p className='form-error'>{signUp.errors.userprofile}</p>}
              </label>
            </div>
            <button className='btn signup-btn' type='submit'>Sign up</button>
          </form>
        </div>) :
        (<div className='auth-content '>
          <form className='auth-form' onSubmit={login.handleSubmit}>
            <div className='title'>Login</div>
            <div className='title'>Don't have a account? Click here -> <a href='#' className='btn' onClick={onClickHandler}>Sign up</a></div>
            <label htmlFor='email' className='auth-label'>
              Email
            </label>
            <input id='email' 
              className='auth-input' 
              type='email'
              value={login.values.email}
              onChange={login.handleChange}
              onBlur={login.handleBlur}/>
            {<p className='form-error'>{login.errors.email}</p>}
            <label htmlFor='password' className='auth-label'>
              Password
            </label>
            <input id='password' 
              className='auth-input' 
              type='password'
              value={login.values.password}
              onChange={login.handleChange}
              onBlur={login.handleBlur}/>
            {<p className='form-error'>{login.errors.password}</p>}
            <button className='btn signup-btn' type='submit'>Login</button>
          </form>
        </div>
        )}
    </div>
  );
}

export default Auth;