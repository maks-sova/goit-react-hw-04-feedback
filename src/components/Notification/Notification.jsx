import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={css.Notification}>{message}</p>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
