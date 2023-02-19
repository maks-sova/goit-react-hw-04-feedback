import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  title,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.Statistics}>
      <h2 className={css.titleStyle}>{title}</h2>
      <p className={css.pStyle}>Good:{good}</p>
      <p className={css.pStyle}>Neutral:{neutral}</p>
      <p className={css.pStyle}>Bad:{bad}</p>
      <p className={css.pStyle}>Total:{total}</p>
      <p className={css.pStyle}>Positive feedback:{positivePercentage}</p>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
