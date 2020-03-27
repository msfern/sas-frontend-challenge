import React from 'react';
import './style.scss';

const ResultDetailed = () => {
  return (
    <div className="result__report__detailed">
      <div className="result__report__detailed-overview">
        <p>Fácil</p>
        <p>Acertos: 2</p>
        <p>Erros: 1</p>
      </div>
      <div className="result__report__detailed-overview">
        <p>Médio</p>
        <p>Acertos: 2</p>
        <p>Erros: 1</p>
      </div>
      <div className="result__report__detailed-overview">
        <p>Difícil</p>
        <p>Acertos: 2</p>
        <p>Erros: 1</p>
      </div>
    </div>
  );
};

export default ResultDetailed;
