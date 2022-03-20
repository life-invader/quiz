import { useEffect, useState } from 'react';
import Game from '../game/game';
import Home from '../home/home';
import Result from '../result/result';
import type { GameContainerType } from './type';

function GameContainer({ questions }: GameContainerType) {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Текущий вопрос
  const [score, setScore] = useState(0); // Общий балл
  const [showScore, setShowScore] = useState(false); // Отобразить результат ( да / нет )
  const [showHome, setShowHome] = useState(true); // Отобразить главный экран ( да / нет )

  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);

  const startGame = () => {
    setShowHome(false);
  }

  const handleNextButtonClick = () => {
    setCurrentQuestion((prevState) => prevState + 1);
  }

  const handlePrevButtonClick = () => {
    setCurrentQuestion((prevState) => prevState - 1);
  }

  const handleRefresh = () => {
    setShowScore(false);
    setCurrentQuestion(0);
  }

  useEffect(() => {
    setNextButtonDisabled(false);
    setPrevButtonDisabled(false);

    if ((currentQuestion + 1) === questions.length) {
      setNextButtonDisabled(true);
    }

    if (currentQuestion === 0) {
      setPrevButtonDisabled(true);
    }
  }, [currentQuestion, questions.length])


  return (
    < >
      {
        showHome && <Home startGame={startGame} />
      }
      {
        (!showScore && !showHome) &&
        <Game question={questions[currentQuestion]}
          handleNextButtonClick={handleNextButtonClick}
          handlePrevButtonClick={handlePrevButtonClick}
          currentQuestion={currentQuestion + 1}
          questionsAmount={questions.length}
          nextButtonDisabled={nextButtonDisabled}
          prevButtonDisabled={prevButtonDisabled}
        />
      }
      {
        showScore &&
        <Result
          totalScore={score}
          questionsAmount={questions.length}
          handleRefresh={handleRefresh}
        />
      }
    </>
  );
}

export default GameContainer;
