import React, { useState } from 'react';
import './TaskComplete.css';

export default function TaskComplete({ filterTasks }) {
  const [activeFilter, setActiveFilter] = useState('all'); // 활성화된 필터 유형 상태

  const handleFilter = (filterType) => {
    setActiveFilter(filterType); // 활성화된 필터 유형 업데이트
    filterTasks(filterType); // 부모 컴포넌트의 필터링 함수 호출
  };

  return (
    <nav id="task_filter">
      <span 
        className={`filter_item all ${activeFilter === 'all' ? 'active' : ''}`} 
        onClick={() => handleFilter('all')}
      >
        All
      </span>
      <span 
        className={`filter_item incomplete ${activeFilter === 'incomplete' ? 'active' : ''}`} 
        onClick={() => handleFilter('incomplete')}
      >
        Incomplete
      </span>
      <span 
        className={`filter_item completed ${activeFilter === 'completed' ? 'active' : ''}`} 
        onClick={() => handleFilter('completed')}
      >
        Completed
      </span>
    </nav>
  );
}