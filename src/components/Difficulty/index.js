import React from 'react';
import './style.scss';

const Difficulty = ({ difficulty }) => {
  const difficulties = ['Fácil', 'Médio', 'Difícil'];
  let stars = [];
  for (let i = 0; i < difficulty + 1; i++) {
    stars.push(<img key={i} src="../../assets/images/star.svg" alt="star" />);
  }

  return (
    <div className="difficulty-indicator">
      {stars}
      <span>{difficulties[difficulty]}</span>
    </div>
  );
};

export default Difficulty;
