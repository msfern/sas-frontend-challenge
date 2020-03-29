import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Close from '../../components/Close/index';
import QuestionContainer from '../../components/QuestionContainer/index';
import Feedback from '../../components/Feedback/index';
import './style.scss';

const Question = ({
  questions,
  currentCategory,
  history,
  addCategoryResultsToReport,
  quitQuiz,
}) => {
  const [counter, setcounter] = useState(0);
  const [categoryReport, setCategoryReport] = useState({});
  const [difficulty, setDifficulty] = useState(1);
  const [gotRight, setGotRight] = useState(false);
  const [hasBeenAnswered, setHasBeenAnswered] = useState(false);
  const [answerHasBeenChosen, setAnswerHasBeenChosen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [rightsInRow, setRighstInRow] = useState(0);
  const [wrongsInRow, setWrongsInRow] = useState(0);
  const [chosenOption, setChosenOption] = useState('');
  const difficulties = ['easy', 'medium', 'hard'];

  useEffect(() => {
    buildQuestion();
  }, [questions, counter, difficulty]);

  useEffect(() => {
    setCategoryReport({
      ...categoryReport,
      [counter]: {
        chosenOption,
        difficulty,
        correctAnswer: currentQuestion.correct_answer,
        time: Date.now(),
        gotRight,
      },
    });
  }, [counter]);

  const checkDifficulty = () => {
    if (rightsInRow === 2) {
      setDifficulty(difficulty < 2 ? difficulty + 1 : difficulty);
      setRighstInRow(0);
    }
    if (wrongsInRow === 2) {
      setDifficulty(difficulty > 0 ? difficulty - 1 : difficulty);
      setWrongsInRow(0);
    }
  };

  const buildQuestion = () => {
    if (Object.keys(questions).length > 0) {
      checkDifficulty();
      const question = questions[difficulties[difficulty]];
      setCurrentQuestion(question[counter]);
    }
  };

  const chooseAnswer = (option) => {
    setChosenOption(option);
    setAnswerHasBeenChosen(true);
  };

  const evaluateAnswer = (chosenAnswer) => {
    if (chosenAnswer === currentQuestion.correct_answer) {
      setGotRight(true);
      setRighstInRow(rightsInRow + 1);
      setWrongsInRow(0);
    } else {
      setWrongsInRow(wrongsInRow + 1);
      setRighstInRow(0);
    }
    setHasBeenAnswered(true);
  };

  const goToNextQuestion = () => {
    setCategoryReport({
      ...categoryReport,
      [counter]: {
        chosenOption,
        difficulty,
        correctAnswer: currentQuestion.correct_answer,
        time: Date.now(),
        gotRight,
      },
    });
    if (counter < 9) {
      setGotRight(false);
      setAnswerHasBeenChosen(false);
      setHasBeenAnswered(false);
      setcounter(counter + 1);
    } else if (counter === 9) {
      addCategoryResultsToReport({ ...categoryReport });
      history.push(`/category/${currentCategory}/result`);
    }
  };

  return (
    <>
      <div className="question">
        <header className="question__header">
          <h2>{currentCategory}</h2>
          <Close quitQuiz={quitQuiz} />
        </header>
        <QuestionContainer
          counter={counter}
          currentQuestion={currentQuestion}
          difficulty={difficulty}
          evaluateAnswer={evaluateAnswer}
          answerHasBeenChosen={answerHasBeenChosen}
          chooseAnswer={chooseAnswer}
        />
      </div>
      {hasBeenAnswered && (
        <Feedback gotRight={gotRight} goToNextQuestion={goToNextQuestion} />
      )}
    </>
  );
};

export default withRouter(Question);
