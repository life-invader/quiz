import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPlaying, setNextQuestion, setPrevQuestion } from '../../store/appSlice';
import { RootState } from '../../store/store';
import Game from '../game/game';
import Home from '../home/home';
import Result from '../result/result';
import type { GameContainerType } from './type';

function GameContainer({ questions }: GameContainerType) {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.isPlaying);
  const currentQuestion = useSelector((state: RootState) => state.currentQuestion);
  const questionsAmount = useSelector((state: RootState) => state.questions.length);
  const isLast = useSelector((state: RootState) => state.currentQuestion.isLast);
  const isFirst = useSelector((state: RootState) => state.currentQuestion.isFirst);
  const result = useSelector((state: RootState) => state.totalScore);
  const userAnswers = useSelector((state: RootState) => state.userAnswers);

  const [showResult, setShowResult] = useState(false); // Показать результаты ? ( да / нет )

  // Старт игры, убираем главный экран, показываем вопросы
  const startGame = () => {
    dispatch(setIsPlaying(true));
  }

  const handleNextButtonClick = (answer: string) => {
    return () => {
      dispatch(setNextQuestion(answer));
    }
  }

  const handlePrevButtonClick = () => {
    dispatch(setPrevQuestion());
  }

  const handleExitButtonClick = (answer: string) => {
    return () => {
      dispatch(setNextQuestion(answer));
      setShowResult(true);
    }
  }

  const handleCloseModal = () => {
    setShowResult(false);
  }

  return (
    < >
      {
        !isPlaying && <Home startGame={startGame} />
      }
      {
        isPlaying &&
        <Game
          question={questions[currentQuestion.position]}
          isLast={isLast}
          isFirst={isFirst}
          handleNextButtonClick={handleNextButtonClick}
          handlePrevButtonClick={handlePrevButtonClick}
          handleExitButtonClick={handleExitButtonClick}
          userAnswers={userAnswers}
        />
      }
      {
        showResult &&
        <Result
          onExitClick={handleCloseModal}
          result={result}
        />
      }
    </>
  );
}

export default GameContainer;
