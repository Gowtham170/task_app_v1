import '../Todos.css';

const AddTodo = () => {

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
        <form className='addtodo-form'>
          <label className='addtodo-label'>Title</label>
          <input className='addtodo-input' type='text' required placeholder='e.g, study for the test'></input>
          <label className='addtodo-label'>Date</label>
          <input className='addtodo-input' type='date' required></input>
          <label className='addtodo-label'>Description (optional)</label>
          <textarea className='addtodo-input' required placeholder='e.g, study for the test'></textarea>
          <label className='addtodo-label'>Select a directory</label>
          <select className='addtodo-input' required>
            <option value='Main'>Main</option>
          </select>
          <label className='addtodo-label'><input type='radio' required style={{marginRight: '.4rem'}}/>Mark as important</label>
          <label className='addtodo-label'><input type='radio' required style={{marginRight: '.4rem'}}/>Mark as completed</label>
          <button className='btn add-task-btn' type='submit'>Add a task</button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;