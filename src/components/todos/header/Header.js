import React from 'react';
import SearchBar from '../../searchbar/SearchBar';
import './Header.css';

const Header = ({localDate}) => {

    return (
        <div className='todo-wrapper'>
            <div className='header'>
                <button className='btn menu-icon screen-lg-hidden'>
                    <i className='ri-menu-3-line'></i>
                </button>
                <SearchBar placeholder="Search task" data={todo} />
            </div>
            <div className='headline-banner'>
                <span className='headline'>To-Do List</span>
                <span className='headline-desc'>{localDate}</span>
            </div>
            <div className='header-action'>
                <div className='header-action-wrapper'>
                    <button className='btn action-btn'>Add new task</button>
                    <span className='user-profile place-items-center screen-lg-hidden'>
                        <img src={require('../../../assets/user_profile_1.jpg')} 
                            className='user-profile-img'
                            alt='user-profile'></img>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;

const todo = [
    { title: 'Todo-1' },
    { title: 'demo' },
    { title: 'example' }
];