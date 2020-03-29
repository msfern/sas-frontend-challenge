import React from 'react';
import ResultHeader from '../ResultHeader/index';
import ResultTotal from '../ResultTotal/index';
import ResultDetailed from '../ResultDetailed/index';
import './style.scss';

const ResultOverview = ({
  totalCorrect,
  totalWrong,
  totalEasy,
  totalMedium,
  totalHard,
}) => {
  return (
    <>
      <ResultHeader />
      <div className="result__report">
        <ResultTotal totalCorrect={totalCorrect} totalWrong={totalWrong} />
        <ResultDetailed
          totalEasy={totalEasy}
          totalMedium={totalMedium}
          totalHard={totalHard}
        />
      </div>
    </>
  );
};

export default ResultOverview;
