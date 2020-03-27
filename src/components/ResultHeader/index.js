import React from 'react';
import './style.scss';

const ResultHeader = () => {
  return (
    <div className="result__top">
      <img src="../../assets/images/toy.svg" alt="Toy" />
      <div className="result__congratulations">
        <p className="text-large">Parabéns!</p>
        <p>Você finalizou o teste</p>
      </div>
      <div className="result__call">
        <p>Veja seu desempenho nas questões</p>
      </div>
    </div>
  );
};

export default ResultHeader;
