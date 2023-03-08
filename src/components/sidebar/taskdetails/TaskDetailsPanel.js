import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './TaskDetailsPanel.css';

const TaskDetailsPanel = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [image, setImage] = useState();
  const [data, setData] = useState();
  const [show, setShow] = useState(false);

  const getuser = async () => {
    try {
      const res = await axios.get('http://localhost:4000/user', {withCredentials: true});
      setUsername(res.data.firstname); 
      setImage(res.data.picturePath);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getuser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:4000/logout', {withCredentials: true});
      navigate('/auth');
      toast.success('Logged out successful')
    } catch(err) {
      console.log(err);
    }
  }

  const onClickHandler = () => {
    const userProfileEle = document.querySelector('#task-details');
    const bgColorEle = document.querySelector('#task-details-bg');
    userProfileEle.classList.remove('activated');
    bgColorEle.classList.remove('activated');
  }

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
    <>
    <div className='task-details-wrapper' id='task-details'>
      <div className='task-panel'>
        <div className='task-panel-header'>
          <div className='greetings'>Hi, {username}</div>
          <span className='user-profile place-items-center' >
            <img src={image}
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
      <div className='logout-action'>
          <button className='btn logout-btn' onClick={handleLogout}>logout</button>
      </div>
    </div>
    <div className='task-details-bg' id='task-details-bg' onClick={onClickHandler}></div>
    </>
  )
}

export default TaskDetailsPanel;


