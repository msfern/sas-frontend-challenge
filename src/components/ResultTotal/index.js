import React from 'react';
import './style.scss';

const ResultTotal = () => {
  return (
    <div className="result__report__total">
      <div className="result__report__total-overview">
        <span>7</span>
        <span>acertos</span>
      </div>
      <div className="result__report__total-overview">
        <span>3</span>
        <span>erros</span>
      </div>
    </div>
  );
};

export default ResultTotal;
