import React, { useState } from 'react';
import axios from 'axios';
import '../Todos.css';

const initialValues = {
  title: '',
  date: '',
  description: '',
  category: '',
  priority: false,
  status: false
}

const AddTodo = () => {

  const [values, setValues] = useState(initialValues);
  // const [priority, setPriority] = useState(false);
  // const [status, setStatus] = useState(false);

  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // setPriority(e.target.value);
    // setStatus(e.target.value);
  };

  const formHandler = async (e) => {
    // e.preventDefault();

    const task = {
      title: values.title,
      date: values.date,
      description: values.description,
      category: values.category,
      priority: values.priority,
      status: values.status
    }

    try {
      const res = await axios.post('http://localhost:4000/users/todos', task, {withCredentials: true});
      console.log(res);
    } catch(err) {
      console.log(err);
    }
    
    setValues({
      title: '',
      date: '',
      description: '',
      category: '',
      priority: '',
      status: ''
    })

    
  }

  const closeTask = () => {
    const addTaskEle = document.querySelector('#addTodo-container');
    addTaskEle.classList.remove('activated');
  }

  return (
    <div className='addtodo-container' id='addTodo-container'>
      <div className='addtodo-wrapper'>
        <div className='addtodo-content'>
          <div className='title'>Add a task</div>
          <button className='btn' onClick={closeTask}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <form className='addtodo-form' onSubmit={formHandler}>
          <label htmlFor='title' className='addtodo-label'>Title</label>
          <input id='title'
            name='title'
            value={values.title}
            onChange={handleChange}
            className='addtodo-input' 
            type='text' 
            required 
            placeholder='e.g, study for the test'/>
  
          <label htmlFor='date' className='addtodo-label'>Date </label>
          <input id='date' 
            name='date' 
            value={values.date}
            onChange={handleChange}
            className='addtodo-input' 
            type='date' 
            required/>

          <label htmlFor='description' className='addtodo-label'>Description (optional)</label>
          <textarea id='description' 
            name='description'
            value={values.description}
            onChange={handleChange}
            className='addtodo-input' 
            required 
            placeholder='e.g, study for the test'/>

          <label htmlFor='category' className='addtodo-label'>Select a directory </label>
          <select id='category' 
            name='category' 
            value={values.category}
            onChange={handleChange}
            className='addtodo-input' 
            required>
            <option value='Main'>Main</option>
            <option value='demo'>demo</option>
          </select>

          <label htmlFor='priority' className='addtodo-label btn'>
            <input id='priority' 
              name='priority' 
              value='true'
              checked={values.priority === 'true'}
              onChange={handleChange}
              type='radio' 
              style={{marginRight: '.4rem'}}/>
            Mark as important 
          </label>
          <label className='addtodo-label btn'>
            <input id='status' 
              name='status' 
              value='true'
              checked={values.status === 'true'}
              onChange={handleChange}
              type='radio'  
              style={{marginRight: '.4rem'}}/>
            Mark as completed
          </label>
          <button className='btn add-task-btn' type='submit'>Add a task</button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;