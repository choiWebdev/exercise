import React from 'react';
import './TaskComplete.css';

export default function TaskComplete({ taskData, filterTasks }) {
  
  const handleFilter = (filterType) => {
    filterTasks(filterType); // 부모 컴포넌트로부터 전달받은 필터링 함수 호출
  };

  return (
    <nav id="task_filter">
      <span className="filter_item all active" onClick={() => handleFilter('all')}>All</span>
      <span className="filter_item imcomplete" onClick={() => handleFilter('incomplete')}>Incomplete</span>
      <span className="filter_item completed" onClick={() => handleFilter('completed')}>Completed</span>
    </nav>
  );
}
