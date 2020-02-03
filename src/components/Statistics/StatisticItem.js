import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function StatisticItem({ stats }) {
  return stats.map(item => (
    <li key={item.id} className={styles.item}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}</span>
    </li>
  ));
}

StatisticItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatisticItem;
