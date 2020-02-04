import React from 'react';
import PropTypes from 'prop-types';
import generateRandomColor from './generateRandomColor';

function StatisticItem({ label, percentage  }) {
  const styledItem = {
    width: '50px',
    height: '50px',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    textTransform: 'lowercase',
  };
  return (
    <li
      style={{ ...styledItem, backgroundColor: generateRandomColor() }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  )
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
