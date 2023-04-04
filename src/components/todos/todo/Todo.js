import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todo.css';
import EditTodo from "../edittodo/EditTodo";
import DeleteModel from '../../deletemodel/DeleteModel';

const initialValues = {
    title: '',
    date: '',
    description: '',
    category: '',
}


const Todo = ({ listView }) => {

    const [show, setShow] = useState();
    const [id, setId] = useState();
    const [values, setValues] = useState([]);
    const [data, setData] = useState(initialValues);
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const getSpecificTask = async (id) => {
        try {
          const res = await axios.get('http://localhost:4000/users/todos/'+id, { withCredentials: true });
          setData(res.data);
          setPriority(res.data.priority);
          setStatus(res.data.status);
        } catch (err) {
          console.log(err);
        }
    }
      
    const openDeleteTask = (id) => {
        const deleteTaskEle = document.querySelector('#delete-model-container');
        deleteTaskEle.classList.add('activated');
        setId(id);
    } 

    const deleteTask = async () => {
         try {
            const res = await axios.delete('http://localhost:4000/users/todos/'+id  , { withCredentials: true });
            console.log(res.data);
            window.location.reload(false);
        } catch (err) {
            console.log(err);
        }
    }
      
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const changePriority = (e) => {
        setPriority(e.target.checked);
    }

    const changeStatus = (e) => {
        setStatus(e.target.checked);
    }

    const formHandler = async (id) => {
        
        const task = {
          title: data.title,
          date: data.date,
          description: data.description,
          category: data.category,
          priority: priority,
          status: status
        }
    
        try {
          const res = await axios.put('http://localhost:4000/users/todos/'+id, task, {withCredentials: true});
          console.log(res);
        } catch(err) {
          console.log(err);
        }
        
        // setValues({
        //   title: '',
        //   date: '',
        //   description: '',
        //   category: '',
        //   priority: '',
        //   status: ''
        // });
        
      }

    // const onChangeHandler = () => {
    //     setShow(!show);
    // }

    const editTask = (id) => {
        const editTaskEle = document.querySelector('#editTodo-container');
        editTaskEle.classList.add('activated');
        getSpecificTask(id);
    }

    const addTask = () => {
        const addTaskEle = document.querySelector('#addTodo-container');
        addTaskEle.classList.add('activated');
    }

    const getAllTask = async () => {
        try {
          const res = await axios.get('http://localhost:4000/users/todos', {withCredentials: true});
          return res.data;
        } catch(err) {
          console.log(err);
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
                                <i className="ri-delete-bin-6-fill" onClick={openDeleteTask}></i>
                                <i className="ri-edit-box-line" onClick={() => editTask(value._id)}></i>
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
                            <i className="ri-delete-bin-6-fill" onClick={() => openDeleteTask(value._id)}></i>
                            <i className="ri-edit-box-line" onClick={() => editTask(value._id)}></i>
                        </div>
                    </div>
                </div>
            ))}
            <button className='add-task btn' onClick={addTask}>Add new task</button>
        </div>)}
        <EditTodo specificTodo={data} 
            priority={priority} 
            status={status}
            onChangeHandler={onChangeHandler}
            changePriority={changePriority} 
            changeStatus={changeStatus}
            formHandler={formHandler}/>
        <DeleteModel deleteTask={deleteTask}/>
        </>
    )
}

export default Todo;