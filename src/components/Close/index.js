import React from 'react';
import { withRouter } from 'react-router';
import './style.scss';

const Close = ({ history, quitQuiz }) => {
  const handleClick = () => {
    quitQuiz();
    history.push(`/`);
  };

  return (
    <div className="close-question" onClick={handleClick}>
      <img src="../../assets/images/x-circle.svg" alt="Close" />
      <span>Fechar</span>
    </div>
  );
};

export default withRouter(Close);
