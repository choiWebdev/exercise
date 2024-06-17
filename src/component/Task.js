import './Task.css';

export default function Task({ taskData, deleteTask, isDoneTask }) {

  const handleTaskToggle = (id, isDone) => {
    const updatedTask = { ...taskData.find(task => task.id === id), isDone: !isDone };
    isDoneTask(id, updatedTask);
  }

  const handleTaskDelete = (e, id) => {
    e.preventDefault();
    deleteTask(id);
  }

  return (
    <>
      {taskData && taskData.length > 0 &&
        taskData.map((item) => (
          <div className="task_line" key={item.id}>
            <span
              className={`task_chk ${item.isDone ? "task_done" : ""}`}
              onClick={() => handleTaskToggle(item.id, item.isDone)}
            ></span>
            <p className="task_txt">{item.task}</p>
            <button className="btn_del" onClick={(e) => handleTaskDelete(e, item.id)}>X</button>
          </div>
        ))
      }
    </>
  )
}