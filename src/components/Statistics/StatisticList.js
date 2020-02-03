import React from 'react';
import StatisticItem from './StatisticItem';
import styles from './Statistics.module.css';

function StatisticList({ stats }) {
  return (
    <ul className={styles.statList}>
      <StatisticItem stats={stats} />
    </ul>
  );
}

export default StatisticList;
