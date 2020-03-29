import React from 'react';
import './style.scss';

const QuestionOption = ({ option, index, chosenOption, pickOption }) => {
  const handleClick = () => {
    pickOption(index);
  };

  return (
    <div
      className={`question__option ${
        chosenOption === index ? 'question__option--is-chosen' : ''
      }`}
      onClick={handleClick}
    >
      {decodeURIComponent(option)}
    </div>
  );
};

export default QuestionOption;
