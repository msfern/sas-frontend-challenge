import React, { useState, useEffect } from 'react';
import Difficulty from '../Difficulty/index';
import QuestionOption from '../QuestionOption/index';
import Button from '../Button/index';
import './style.scss';

const QuestionContainer = ({
  counter,
  difficulty,
  evaluateAnswer,
  answerHasBeenChosen,
  currentQuestion,
  chooseAnswer,
}) => {
  const [options, setOptions] = useState([]);
  const [chosenOption, setChosenOption] = useState(-1);

  useEffect(() => {
    shuffleOptions();
  }, [currentQuestion]);

  const handleClick = () => {
    evaluateAnswer(options[chosenOption]);
    setChosenOption(-1);
  };

  const pickOption = (chosenAnswer) => {
    setChosenOption(chosenAnswer);
    chooseAnswer(chosenAnswer);
  };

  const shuffleOptions = () => {
    if (Object.keys(currentQuestion).length > 0) {
      const correctAnswer = currentQuestion.correct_answer;
      const optionArray = currentQuestion.incorrect_answers;
      optionArray.push(correctAnswer);
      const shuffledArray = optionArray.sort(() => Math.random() - 0.5);
      setOptions(shuffledArray);
    }
  };

  return (
    <section className="question__container">
      <div className="question__top">
        <p>{`Questão ${counter + 1}`}</p>
        <Difficulty difficulty={difficulty} />
      </div>
      <p className="question__description">
        {currentQuestion ? decodeURIComponent(currentQuestion.question) : ''}
      </p>
      <div className="question__options">
        {options.map((option, index) => (
          <QuestionOption
            key={index}
            option={option}
            index={index}
            pickOption={pickOption}
            chosenOption={chosenOption}
            answerHasBeenChosen={answerHasBeenChosen}
          />
        ))}
      </div>
      <Button
        text="Responder"
        hasArrow={false}
        isDisabled={!answerHasBeenChosen}
        callback={handleClick}
      />
    </section>
  );
};

export default QuestionContainer;
