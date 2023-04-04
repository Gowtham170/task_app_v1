import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../../searchbar/SearchBar';
import './Header.css';

const Header = ({localDate}) => {

    const [value, setValue] = useState([]);
    const [image, setImage] = useState();

    const getAllTaskTitle = async (id) => {
        try {
          const res = await axios.get('http://localhost:4000/users/todos/title', { withCredentials: true });
          return res.data;
        } catch (err) {
          console.log(err);
        }
    }

    const getuser = async () => {
        try {
          const res = await axios.get('http://localhost:4000/user', {withCredentials: true}); 
          return (res.data.picturePath);
        //   setImage(res.data.picturePath);
        } catch (err) {
          console.log(err);
        }
      }

      useEffect(() => {
        (
            async () => {
                const image = await getuser();
                setImage(image);
                const data = await getAllTaskTitle();
                setValue(data);
              }
        )();
    }, []);
    
    //   useEffect(() => {
    //     getuser();
    //     async () => {
    //         const data = await getAllTaskTitle();
    //         setValue(data);
    //       //   setFilteredData(data)
    //       }
    //   }, []);

    const openMenu = () => {
        const sidebarEle = document.querySelector('#sidebar');
        const bgColorEle = document.querySelector('#bg-color');
        sidebarEle.classList.add('activated');
        bgColorEle.classList.add('activated');
    }

    const openUserProfile = () => {
        const userProfileEle = document.querySelector('#task-details');
        const bgColorEle = document.querySelector('#task-details-bg');
        userProfileEle.classList.add('activated');
        bgColorEle.classList.add('activated');
    }

    const addTask = () => {
        const addTaskEle = document.querySelector('#addTodo-container');
        addTaskEle.classList.add('activated');
    }

    return (
        <>
        <div className='todo-wrapper'>
            <div className='header'>
                <button className='btn menu-icon' onClick={openMenu}>
                    <i className='ri-menu-3-line'></i>
                </button>
                <div className='screen-sm-hidden'>
                    <SearchBar placeholder="Search task" data={value} />
                </div>
            </div>
            <div className='headline-banner'>
                <span className='headline'>To-Do List</span>
                <span className='headline-desc'>{localDate}</span>
            </div>
            <div className='header-action'>
                <div className='header-action-wrapper'>
                    <button className='btn action-btn' onClick={addTask}>Add new task</button>
                    <span className='btn user-profile place-items-center user-profile-icon' onClick={openUserProfile}>
                        <img src={image} 
                            className='user-profile-img'
                            alt='user-profile'></img>
                    </span>
                </div>
            </div>
        </div>
        <div className='screen-lg-hidden'>
            <SearchBar placeholder="Search task" data={value} />
        </div>
        </>
    )
}

export default Header;

// const todo = [
//     { title: 'Todo-1' },
//     { title: 'demo' },
//     { title: 'example' }
// ];