import React from 'react';
import ResultHeader from '../ResultHeader/index';
import ResultTotal from '../ResultTotal/index';
import ResultDetailed from '../ResultDetailed/index';
import './style.scss';

const ResultOverview = () => {
  return (
    <>
      <ResultHeader />
      <div className="result__report">
        <ResultTotal />
        <ResultDetailed />
      </div>
    </>
  );
};

export default ResultOverview;
