import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function RenderData({ stats }) {
  return (
    <ul className={styles.statList}>
      {stats.map(item => (
        <li key={item.id} className={styles.item}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
}

RenderData.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default RenderData;
