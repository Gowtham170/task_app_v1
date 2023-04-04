import { useState } from 'react';
import '../Todos.css';


const EditTodo = ({ 
  specificTodo, 
  priority, 
  status, 
  onChangeHandler, 
  changePriority, 
  changeStatus, 
  formHandler }) => { 

  const closeTask = () => {
    const editTaskEle = document.querySelector('#editTodo-container');
    editTaskEle.classList.remove('activated');
  }

  return (
    <div>
      <div className='edittodo-container' id='editTodo-container'>
        <div className='addtodo-wrapper'>
          <div className='addtodo-content'>
            <div className='title'>Edit task</div>
            <button className='btn' onClick={closeTask}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <form className='addtodo-form' onSubmit={() => formHandler(specificTodo._id)}>
            <label htmlFor='title' 
              className='addtodo-label'>
                Title
            </label>
            <input id='name' 
              name='title' 
              className='addtodo-input' 
              type='text' 
              required
              value={specificTodo.title} 
              onChange={onChangeHandler}
              placeholder='e.g, study for the test'/>

            <label htmlFor='date' 
              className='addtodo-label'>
                Date
            </label>
            <input id='date' 
              name='date' 
              className='addtodo-input' 
              type='date' 
              required
              value={specificTodo.date.slice(0,10)}
              onChange={onChangeHandler}/>

            <label htmlFor='description' 
              className='addtodo-label'>
                Description (optional)
            </label>
            <textarea id='description'
              name='description' 
              className='addtodo-input' 
              value={specificTodo.description} 
              onChange={onChangeHandler}
              placeholder='e.g, study for the test'/>

            <label htmlFor='category' 
              className='addtodo-label'>
                Select a directory
            </label>
            <select id='category' 
              name='category' 
              className='addtodo-input' 
              required
              value={specificTodo.category}
              onChange={onChangeHandler}>
              <option value='Main'>Main</option>
            </select>

            <label htmlFor='priority' className='addtodo-label btn'>
              <input id='priority' 
                name='priority' 
                type='checkbox'
                // value={priority} 
                checked={priority}
                onChange={changePriority}
                style={{ marginRight: '.4rem'}}/>
              Mark as important
            </label>

            <label htmlFor='status' className='addtodo-label btn'>
              <input id='status' 
                name='status' 
                type='checkbox'
                // value={status} 
                checked={status} 
                onChange={changeStatus}
                style={{ marginRight: '.4rem' }}/>
              Mark as completed
            </label>

            <button className='btn add-task-btn' type='submit'>Edit task</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTodo;