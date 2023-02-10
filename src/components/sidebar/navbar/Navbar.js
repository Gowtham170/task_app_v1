import React from 'react';
import './Navbar.css';

const Sidebar = () => {
  return (
    <div className='sidebar' id='sidebar'>
        <div className='navbar'>
            <span>
                <h6 className='logo'>To-Do List</h6>
            </span>
                <button className='btn add-task-btn'>
                    Add new task
                </button>
            <div className='menu'>
                <ul className='list'>
                    <li className='list-item current'>
                        <a href='localhost:3000' className='list-link'>
                            Today's tasks
                        </a>
                        <span className='bar'></span>
                    </li>
                    <li className='list-item'>
                        <a href='localhost:3000' className='list-link'>
                            All tasks
                        </a>
                    </li>
                    <li className='list-item'>
                        <a href='localhost:3000' className='list-link'>
                            Important tasks
                        </a>
                    </li>
                    <li className='list-item'>
                        <a href='localhost:3000' className='list-link'>
                            Completed tasks
                        </a>
                    </li>
                    <li className='list-item'>
                        <a href='localhost:3000' className='list-link'>
                            Uncompleted tasks
                        </a>
                    </li> <li className='list-item'>
                        <a href='localhost:3000' className='list-link'>
                            Directories
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;