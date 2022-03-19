import { useState } from 'react';
import Game from '../game/game';
import Home from '../home/home';
import Result from '../result/result';
import styles from './app.module.scss';
import type { AppType } from './type';

function App({ questions }: AppType) {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Текущий вопрос
  const [score, setScore] = useState(0); // Общий балл
  const [showScore, setShowScore] = useState(false); // Отобразить результат ( да / нет )
  const [showHome, setShowHome] = useState(true); // Отобразить результат ( да / нет )

  const startGame = () => {
    setShowHome(false);
  }

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevState => prevState + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const handleRefresh = () => {
    setShowScore(false);
    setCurrentQuestion(0);
  }

  return (
    <div className={styles.app}>
      {
        showHome && <Home startGame={startGame} />
      }
      {
        (!showScore && !showHome) &&
        <Game question={questions[currentQuestion]}
          handleAnswerClick={handleAnswerClick}
          currentQuestion={currentQuestion + 1}
          questionsAmount={questions.length}
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

    </div>
  );
}

export default App;
