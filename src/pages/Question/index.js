import React from 'react';
import Close from '../../components/Close/index';
import QuestionContainer from '../../components/QuestionContainer/index';
import './style.scss';

const Question = () => {
  return (
    <div className="question">
      <header className="question__header">
        <h2>História</h2>
        <Close />
      </header>
      <QuestionContainer />
    </div>
  );
};

export default Question;
