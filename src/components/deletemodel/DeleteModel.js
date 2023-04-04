import React from 'react';
import './DeleteModel.css';

const DeleteModel = ({ deleteTask }) => {

    const closeDeleteTask = () => {
        const deleteTaskEle = document.querySelector('#delete-model-container');
        deleteTaskEle.classList.remove('activated');
    } 

  return (
    <div className='delete-model-container' id='delete-model-container'>
        <div className='delete-model-content'>
            <div className='delete-model-header'>
                <h5>Are you sure?</h5>
                <button className='btn'>
                    <i className="ri-close-line" onClick={closeDeleteTask}></i>
                </button>
            </div>
            <div className='title'>
                This task will be deleted permanently.
            </div>
            <div className='delete-model-action'>
                <button className='btn cancel-btn' onClick={closeDeleteTask}>cancel</button>
                <button className='btn confirm-btn' onClick={deleteTask}>confirm</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModel