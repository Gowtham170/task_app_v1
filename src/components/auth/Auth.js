import { useState } from 'react';
import './Auth.css';

const Auth = () => {

  const [show, setShow] = useState(false);

  const onClickHandler = () => {
    setShow(!show);
  }

  return (
    <div className='auth-container'>
      <img className='image-wrapper' alt='todo-img' src={require('../../assets/todo.jpg')}></img>
      {(show) ?
        (<div className='signup-content'>
          <form className='signup-form'>
            <div className='title'>Sign Up</div>
            <div className='title' style={{ fontSize: '1.3rem' }}>Already have a account? Click here -> <a href='#' className='btn' onClick={onClickHandler}>Login</a></div>
            <div className='form-group d-grid'>
              <label className='auth-label'>Firstname <input className='auth-input' type='text'/></label>
              <label className='auth-label'>Lastname <input className='auth-input' type='text'/></label>
              <label className='auth-label'>Email <input className='auth-input' type='email'/></label>
              <label className='auth-label'>Password <input className='auth-input' type='password'/></label>
              <label className='auth-label'>User Profile <input className='auth-input' type='file'/></label>
            </div>
            <button className='btn signup-btn' type='submit'>Sign up</button>
          </form>
        </div>) :
        (<div className='login-content '>
          <form className='login-form'>
            <div className='title'>Login</div>
            <div className='title' style={{ fontSize: '1.3rem' }}>Don't have a account? Click here -> <a href='#' className='btn' onClick={onClickHandler}>Sign up</a></div>
            <label className='auth-label'>Email</label>
            <input className='auth-input' type='email' />
            <label className='auth-label'>Password</label>
            <input className='auth-input' type='password' />
            <button className='btn signup-btn' type='submit'>Login</button>
          </form>
        </div>
        )}
    </div>
  )
}

export default Auth;