import React from 'react';
import './style.scss';

const ResultTotal = ({ totalCorrect, totalWrong }) => {
  return (
    <div className="result__report__total">
      <div className="result__report__total-overview">
        <span>{totalCorrect}</span>
        <span>acertos</span>
      </div>
      <div className="result__report__total-overview">
        <span>{totalWrong}</span>
        <span>erros</span>
      </div>
    </div>
  );
};

export default ResultTotal;
