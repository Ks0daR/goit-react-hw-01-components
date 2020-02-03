import React from 'react';
import StatisticList from './StatisticList';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <StatisticList stats={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
