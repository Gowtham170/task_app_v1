import React from 'react';
import { Navbar , Todos, TaskDetailsPanel, AddTodo, EditTodo } from './components';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Todos/>
      <TaskDetailsPanel/>
      <AddTodo/>
      <EditTodo/>
    </div>
  );
}

export default App;