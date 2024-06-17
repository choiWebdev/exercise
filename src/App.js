import React, { useState, useEffect } from 'react';
import './App.css';
import paperBg from './img/bg_paper2.jpg';
import Input from './component/Input';
import TaskList from './component/TaskList';
import TaskComplete from './component/TaskComplete';
import useFetch from './component/useFetch';

document.getElementsByTagName('html')[0].style.backgroundImage = `url(${paperBg})`;

function App() {
  const [taskData, setTaskData] = useState([]); // 할 일 데이터 상태
  const [filteredTasks, setFilteredTasks] = useState([]); // 필터링된 할 일 데이터 상태
  const [url, setUrl] = useState('http://localhost:3001/tasks'); // API URL
  const [result, addTask, deleteTask, isDoneTask] = useFetch(url); // useFetch 훅 사용

  // 데이터 가져오기 useEffect
  useEffect(() => {
    setTaskData(result);
    setFilteredTasks(result);
  }, [result]);

  // 새로운 할 일 추가 함수
  const handleAddTask = (newTask) => {
    const task = { task: newTask, isDone: false };
    addTask(task);
  };

  // 할 일 삭제 함수
  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  // 할 일 업데이트 함수
  const handleUpdateTask = (id, updatedTask) => {
    isDoneTask(id, updatedTask);
  };

  // 할 일 필터링 함수
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
        <TaskComplete taskData={taskData} filterTasks={filterTasks} />
      </header>
      <Input onAddTask={handleAddTask} />
      <TaskList taskData={filteredTasks} deleteTask={handleDeleteTask} isDoneTask={handleUpdateTask} />
    </div>
  );
}

export default App;
