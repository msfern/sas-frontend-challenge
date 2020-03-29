import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import ResultOverview from '../../components/ResultOverview/index';
import Button from '../../components/Button/index';

const Result = ({ history, clearQuestions, report, currentCategoryId }) => {
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [totalEasy, setTotalEasy] = useState({ rights: 0, wrongs: 0 });
  const [totalMedium, setTotalMedium] = useState({ rights: 0, wrongs: 0 });
  const [totalHard, setTotalHard] = useState({ rights: 0, wrongs: 0 });

  const handleClick = () => {
    clearQuestions();
    history.push(`/`);
  };

  useEffect(() => {
    const calculateTotals = () => {
      if (currentCategoryId) {
        const category = report[currentCategoryId];
        let corrects = 0;
        let wrongs = 0;
        Object.keys(category).map((question) => {
          if (category[question].gotRight) {
            corrects += 1;
            setTotalCorrect(corrects);
          } else {
            wrongs += 1;
            setTotalWrong(wrongs);
          }
        });
      }
    };

    const calculateTotalDifficulties = () => {
      if (currentCategoryId) {
        const category = report[currentCategoryId];
        let easyCorrects = 0;
        let easyWrongs = 0;
        let mediumCorrects = 0;
        let mediumWrongs = 0;
        let hardCorrects = 0;
        let hardWrongs = 0;
        Object.keys(category).map((question) => {
          if (category[question].difficulty === 0) {
            if (category[question].gotRight) {
              easyCorrects += 1;
              setTotalEasy({ rights: easyCorrects, wrongs: easyWrongs });
            } else {
              easyWrongs += 1;
              setTotalEasy({ rights: easyCorrects, wrongs: easyWrongs });
            }
          }

          if (category[question].difficulty === 1) {
            if (category[question].gotRight) {
              mediumCorrects += 1;
              setTotalMedium({ rights: mediumCorrects, wrongs: mediumWrongs });
            } else {
              mediumWrongs += 1;
              setTotalMedium({ rights: mediumCorrects, wrongs: mediumWrongs });
            }
          }

          if (category[question].difficulty === 2) {
            if (category[question].gotRight) {
              hardCorrects += 1;
              setTotalHard({ rights: hardCorrects, wrongs: hardWrongs });
            } else {
              hardWrongs += 1;
              setTotalHard({ rights: hardCorrects, wrongs: hardWrongs });
            }
          }
        });
      }
    };
    calculateTotals();
    calculateTotalDifficulties();
  }, [currentCategoryId, report]);

  return (
    <section className="result">
      <ResultOverview
        totalCorrect={totalCorrect}
        totalWrong={totalWrong}
        totalEasy={totalEasy}
        totalMedium={totalMedium}
        totalHard={totalHard}
      />
      <Button
        text="Voltar ao início"
        isDisabled={false}
        callback={handleClick}
      />
    </section>
  );
};

export default withRouter(Result);
