import React from "react";
import {TaskProvider} from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
  return (
    <TaskProvider>
      <div className="App">
      
      <h1>Administrador de Tareas</h1>
      <TaskForm />   
      <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
