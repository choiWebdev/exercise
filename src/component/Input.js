import './Input.css';
import { useState } from 'react';

export default function Input({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    if (newTask.length > 30) {
      alert('30자 이하로 작성해주세요.');
      return false;
    }
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
