import './Input.css';
import { useState } from 'react';

export default function Input({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div className="input_wrap">
      <form onSubmit={handleSubmit}>
        <div className="flex_box">
          <input
            className="ipt_txt"
            type="text"
            placeholder="Enter your task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn_submit" type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
}
