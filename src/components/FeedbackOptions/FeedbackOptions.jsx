import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ buttons, onLeaveFeedback }) {
  return (
    <div className={css.titleFeedbackOptions}>
      <ul className={css.listFeedbackOptions}>
        {buttons.map(button => (
          <li className={css.liStyle} key={buttons}>
            <button
              className={css.button}
              type="button"
              name={button}
              onClick={onLeaveFeedback}
            >
              {button}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
