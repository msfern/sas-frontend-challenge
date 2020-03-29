import React from 'react';
import './style.scss';

const Button = ({ text, isDisabled, hasArrow, callback }) => {
  return (
    <button
      className="button"
      type="button"
      disabled={isDisabled}
      onClick={callback}
    >
      {text}
      {hasArrow && <img src="../assets/images/arrow-right.svg" alt="Seta" />}
    </button>
  );
};

export default Button;
