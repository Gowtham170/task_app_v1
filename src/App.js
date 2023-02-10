import React from 'react';
import { Navbar , Todos, TaskDetailsPanel } from './components';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Todos/>
      <TaskDetailsPanel/>
    </div>
  );
}

export default App;