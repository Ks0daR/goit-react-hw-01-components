import React from 'react';
import RenderData from './RenderData'
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title, data }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <RenderData stats={data} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
}

export default Statistics;
