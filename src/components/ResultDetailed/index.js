import React from 'react';
import './style.scss';

const ResultDetailed = ({ totalEasy, totalMedium, totalHard }) => {
  return (
    <div className="result__report__detailed">
      <div className="result__report__detailed-overview">
        <p>Fácil</p>
        <p>{`Acertos: ${totalEasy.rights}`}</p>
        <p>{`Erros: ${totalEasy.wrongs}`}</p>
      </div>
      <div className="result__report__detailed-overview">
        <p>Médio</p>
        <p>{`Acertos: ${totalMedium.rights}`}</p>
        <p>{`Erros: ${totalMedium.wrongs}`}</p>
      </div>
      <div className="result__report__detailed-overview">
        <p>Difícil</p>
        <p>{`Acertos: ${totalHard.rights}`}</p>
        <p>{`Erros: ${totalHard.wrongs}`}</p>
      </div>
    </div>
  );
};

export default ResultDetailed;
