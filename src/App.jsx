import { useState } from 'react';
import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <TaskForm data={tasks} setTasks={setTasks}></TaskForm>
      <TaskList data={tasks} setTasks={setTasks}></TaskList>
    </>
  )
}

export default App
