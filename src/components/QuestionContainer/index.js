import React from 'react';
import Difficulty from '../Difficulty/index';
import QuestionOption from '../QuestionOption/index';
import Button from '../Button/index';
import './style.scss';

const QuestionContainer = () => {
  return (
    <section className="question__container">
      <div className="question__top">
        <p>Questão 1</p>
        <Difficulty level="Difícil" />
      </div>
      <p className="question__description">
        Sobre a conhecida Idade dos Metais, na transição entre a Pré-História e
        a História, é possível afirmar que
      </p>
      <div className="question__options">
        <QuestionOption />
        <QuestionOption />
        <QuestionOption />
        <QuestionOption />
      </div>
      <Button text="Responder" isDisabled />
    </section>
  );
};

export default QuestionContainer;
