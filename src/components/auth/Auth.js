import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Auth.css';
import { signUpSchema, loginSchema } from '../schema/index';

const signUpInitialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  imageFile: ''
};

const loginInitialValues = {
  email: '',
  password: ''
};

const Auth = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const signUp = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: signUpSchema,
    onSubmit: async(values, {resetForm}) => {
      const fd = new FormData();
      fd.append('firstname', values.firstname);
      fd.append('lastname', values.lastname);
      fd.append('email', values.email);
      fd.append('password', values.password);
      fd.append('imageFile', values.imageFile);
      try {
        const res = await axios.post('http://localhost:4000/register', fd);
        console.log(res);
        resetForm({values: ''});
        ref.current.value = '';
        toast.success('registration successful');
      } catch(err) {
        console.log(err);
        toast.error('registration failure');
      }
    }
  });

  const login = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {resetForm}) => {
      // try {
      //   const res = await axios.post('http://localhost:4000/login', values);
      //   console.log(res);
      //   resetForm({values: ''});
      //   navigate('/');
      // } catch(err) {
      //   console.log(err);
      // }
      fetch('http://localhost:4000/login', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(values)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        resetForm({values: ''});
        navigate('/');
        toast.success('login successful');
      })
      .catch(err => {
        console.log(err);
        toast.error('login failure');
      });
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
                  name='firstname' 
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
                  name='lastname'
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
                  name='email'
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
                  name='password'
                  className='auth-input' 
                  type='password'
                  value={signUp.values.password}
                  onChange={signUp.handleChange}
                  onBlur={signUp.handleBlur}/>
                {<p className='form-error'>{signUp.errors.password}</p>}
              </label>
              <label htmlFor='imageFile' className='auth-label'>
                Upload Profile 
                <input id='imageFile'
                  ref={ref}
                  name='imageFile' 
                  className='auth-input' 
                  type='file'
                  accept='image/*'
                  onChange={(e) => signUp.setFieldValue('imageFile', e.currentTarget.files[0])}
                  onBlur={signUp.handleBlur}/>
                {<p className='form-error'>{signUp.errors.imageFile}</p>}
              </label>
            </div>
            <button className='btn signup-btn' type='submit'>Sign up</button>
          </form>
        </div>) 
         :
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