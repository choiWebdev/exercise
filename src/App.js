import React, { useState, useEffect } from 'react';
import './App.css';
import paperBg from './img/bg_paper2.jpg';
import Input from './component/Input';
import TaskList from './component/TaskList';
import TaskComplete from './component/TaskComplete';
import useFetch from './component/useFetch';

document.getElementsByTagName('html')[0].style.backgroundImage = `url(${paperBg})`;

export default function App() {
  const [taskData, setTaskData] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const url = 'http://localhost:3001/tasks';
  const [result, addTask, deleteTask, updateTask] = useFetch(url);

  useEffect(() => {
    setTaskData(result);
    setFilteredTasks(result);
  }, [result]);

  const handleAddTask = (newTask) => {
    const task = { task: newTask, isDone: false };
    addTask(task);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  const handleUpdateTask = (id, updatedTask) => {
    updateTask(id, updatedTask);
  };

  const filterTasks = (filterType) => {
    switch (filterType) {
      case 'all':
        setFilteredTasks(taskData);
        break;
      case 'incomplete':
        setFilteredTasks(taskData.filter(task => !task.isDone));
        break;
      case 'completed':
        setFilteredTasks(taskData.filter(task => task.isDone));
        break;
      default:
        setFilteredTasks(taskData);
        break;
    }
  };

  return (
    <div className="App">
      <header id="header">
        <h1>My To Do List</h1>
        <TaskComplete filterTasks={filterTasks} />
      </header>
      <Input onAddTask={handleAddTask} />
      <TaskList 
        taskData={filteredTasks} 
        deleteTask={handleDeleteTask} 
        isDoneTask={handleUpdateTask} // 이 라인을 추가
        updateTask={handleUpdateTask} 
      />
    </div>
  );
}