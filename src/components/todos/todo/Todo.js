import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todo.css'

const Todo = ({ listView }) => {

    const [show, setShow] = useState();
    const [values, setValues] = useState([]);

    const onChangeHandler = () => {
        setShow(!show);
    }

    const editTask = () => {
        const editTaskEle = document.querySelector('#editTodo-container');
        editTaskEle.classList.add('activated');
    }

    const addTask = () => {
        const addTaskEle = document.querySelector('#addTodo-container');
        addTaskEle.classList.add('activated');
    }

    const getAllTask = async () => {
        try {
          const res = await axios.get('/api/users/todos', {withCredentials: true});
          return res.data;
        } catch(err) {
          console.log(err);
          return false;
        }
      }

    useEffect(() => {
        (
            async () => {
              const data = await getAllTask();
              setValues(data);
            }
        )();
    }, []);

    return (
        <>
            {(listView) ?

            (<div className='task-list-container'>
                {values.map((value) => (
                    <div className='todo-list' key={value._id}>
                        <div className='todo-content'>
                            <div className='wrapper'>
                                <div className='todo-title'>{value.title}</div>
                                <span className='todo-desc'>{value.description}</span>
                            </div>
                            <div className='todo-time'>
                                <span className='place-items-center'>
                                    <i className="ri-calendar-todo-line" />
                                    {new Date(value.date).toDateString().slice(4, 15)}
                                </span>
                            </div>
                        </div>
                        <div className='todo-action'>
                            {
                                (value.priority) ? (<button className='btn todo-status-btn completed-status-btn' onClick={onChangeHandler}>Completed</button>)
                                    : (<button className='btn todo-status-btn uncompleted-status-btn' onClick={onChangeHandler}>Uncompleted</button>)
                            }
                            <div className='todo-action-btn-group btn'>
                                {
                                    (value.status) ? (<i className="ri-star-fill" style={{color: 'red'}}></i>)
                                        : (<i className="ri-star-line"></i>)
                                }
                                <i className="ri-delete-bin-6-fill"></i>
                                <i className="ri-edit-box-line" onClick={editTask}></i>
                            </div>
                        </div>
                    </div>
                ))}
                <button className='add-task btn' onClick={addTask}>Add new task</button>
            </div>) :
            (<div className='task-grid-container d-grid'>
            {values.map((value) => (
                <div className='todo-grid' key={value._id}>
                    <div className='todo-content'>
                        <div className='wrapper'>
                            <div className='todo-title'>{value.title}</div>
                            <span className='todo-desc'>{value.description}</span>
                        </div>
                        <div className='todo-time'>
                            <span className='place-items-center'>
                                <i className="ri-calendar-todo-line" />
                                {new Date(value.date).toDateString().slice(4, 15)}
                            </span>
                        </div>
                    </div>
                    <div className='todo-action'>
                        <div className='screen-sm-hidden'>
                            {
                            (value.priority) ? (<button className='btn todo-status-btn completed-status-btn' onClick={onChangeHandler}>Completed</button>)
                                 : (<button className='btn todo-status-btn uncompleted-status-btn' onClick={onChangeHandler}>Uncompleted</button>)
                            }
                        </div>
                        <div className='screen-lg-hidden'>
                            {
                            (value.priority) ? (<i className="ri-checkbox-circle-fill btn" style={{color: '#73f0cd', fontSize: '2.2rem'}} onClick={onChangeHandler}></i>)
                                 : (<i className="ri-close-circle-fill btn" style={{color: '#f5e97f', fontSize: '2.2rem'}} onClick={onChangeHandler}></i>)
                            }     
                        </div>
                        <div className='todo-action-btn-group btn'>
                            {
                                (value.status) ? (<i className="ri-star-fill" style={{color: 'red'}}></i>)
                                    : (<i className="ri-star-line"></i>)
                            }
                            <i className="ri-delete-bin-6-fill"></i>
                            <i className="ri-edit-box-line" onClick={editTask}></i>
                        </div>
                    </div>
                </div>
            ))}
            <button className='add-task btn' onClick={addTask}>Add new task</button>
        </div>)}
        </>
    )
}

export default Todo;