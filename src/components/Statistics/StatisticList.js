import React from 'react';
import StatisticItem from './StatisticItem';
import styles from './Statistics.module.css';

function StatisticList({ stats }) {
  return (
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
}

export default StatisticList;
