import React from 'react';
import ResultOverview from '../../components/ResultOverview/index';
import Button from '../../components/Button/index';

const Result = () => {
  return (
    <section className="result">
      <ResultOverview />
      <Button text="Voltar ao início" isDisabled={false} />
    </section>
  );
};

export default Result;
