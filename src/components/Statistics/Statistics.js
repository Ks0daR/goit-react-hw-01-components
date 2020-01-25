import React from 'react';
import RenderData from './RenderData'

function Statistics({ title, data }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <RenderData stats={data} />
    </section>
  );
}

export default Statistics;
