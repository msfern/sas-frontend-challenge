import React from 'react';
import Button from '../Button/index';
import './style.scss';

const Feedback = ({ gotRight, goToNextQuestion }) => {
  const handleClick = () => {
    goToNextQuestion();
  };

  return (
    <div className="feedback">
      <div
        className={`feedback-container ${
          gotRight ? 'feedback--correct' : 'feedback--wrong'
        }`}
      >
        <img
          src={`../assets/images/${gotRight ? 'tick' : 'cross'}.svg`}
          alt={`${gotRight ? 'Acertou' : 'Errou'}`}
        />
        <p>{`Você ${gotRight ? 'acertou' : 'errou'} !`}</p>
        <Button
          text="Avançar"
          isDisabled={false}
          hasArrow
          callback={handleClick}
        />
      </div>
    </div>
  );
};

export default Feedback;
