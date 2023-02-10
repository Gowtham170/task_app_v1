import React, { useState } from 'react';
import './TaskDetailsPanel.css';

const TaskDetailsPanel = () => {

  const [show, setShow] = useState(false);

  const changeTheme = () => {
    const bodyElement = document.body;
    const toggleInIcon = document.querySelector('#toggle-in');
    const toggleOutIcon = document.querySelector('#toggle-out');
    bodyElement.classList.toggle('dark-theme');
    toggleInIcon.classList.toggle('activated');
    toggleOutIcon.classList.toggle('activated');
    setShow(!show);
  }

  return (
    <div className='task-details-wrapper'>
      <div className='task-panel'>
        <div className='task-panel-header'>
          <div className='greetings'>Hi, User!</div>
          <span className='user-profile place-items-center'>
            <img src={require('../../../assets/user_profile_1.jpg')} 
                className='user-profile-img'
                alt='user-profile'></img>
          </span>
        </div>
        <div className='task-panel-content-wrapper'>
          <div className='task-details'>
            <div className='mode-switch'>
              {
                show ? (<div>Lightmode</div>) : (<div>Darkmode</div>)
              }
              <button className='btn toggle-btn' onClick={changeTheme}>
                <i className="ri-toggle-line toggle-in" id='toggle-in'></i>
                <i className="ri-toggle-fill toggle-out" id='toggle-out'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailsPanel;


