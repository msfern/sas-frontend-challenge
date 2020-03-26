import React from 'react';
import './style.scss';

const Button = ({ text, isDisabled }) => {
  return (
    <button className="button" type="button" disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;
