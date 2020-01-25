import React from 'react';
import RenderData from './RenderData'
import styles from './Statistics.module.css';

function Statistics({ title, data }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <RenderData stats={data} />
    </section>
  );
}

export default Statistics;
