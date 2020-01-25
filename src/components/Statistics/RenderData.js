import React from 'react';

function RenderData({ stats }) {
  console.log(stats);
  return (
    <ul className="stat-list">
      {stats.map(item => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
}

export default RenderData;
