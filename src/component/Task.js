import React, { useState } from 'react';
import './Task.css';

export default function Task({ taskData, deleteTask, isDoneTask, updateTask }) {
  const [editId, setEditId] = useState(null); // 수정 중인 할 일 ID
  const [editText, setEditText] = useState(''); // 수정 중인 할 일 텍스트

  const handleTaskToggle = (id, isDone) => {
    const updatedTask = { ...taskData.find(task => task.id === id), isDone: !isDone };
    isDoneTask(id, updatedTask);
  };

  const handleTaskDelete = (e, id) => {
    e.preventDefault();
    deleteTask(id);
  };

  const handleEditClick = (id, task) => {
    setEditId(id);
    setEditText(task);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSave = (id) => {
    const updatedTask = { ...taskData.find(task => task.id === id), task: editText };
    if (editText.length > 30) {
      alert("30자 이하로 작성해주세요.");
      return false;
    }
    updateTask(id, updatedTask);
    setEditId(null);
  };

  return (
    <>
      {taskData && taskData.length > 0 &&
        taskData.map((item) => (
          <div className={`task_line ${item.isDone ? "task_done" : ""}`} key={item.id}>
            <span
              className="task_chk"
              onClick={() => handleTaskToggle(item.id, item.isDone)}
            ></span>
            <p className={`task_txt ${editId === item.id ? "hidden" : "visible"}`}>{item.task}</p>
            <div className={`edit_wrap ${editId === item.id ? "visible" : "hidden"}`}>
              <input
                className="ipt_edit"
                type="text"
                value={editText}
                onChange={handleEditChange}
              />
              <button className="btn btn_edit_done" onClick={() => handleEditSave(item.id)}>Done</button>
            </div>
            <div className="btn_wrap">
              <button className="btn btn_edit" onClick={() => handleEditClick(item.id, item.task)}>Edit</button>
              <button className="btn btn_del" onClick={(e) => handleTaskDelete(e, item.id)}>Delete</button>
            </div>
          </div>
        ))
      }
    </>
  );
}