import React, { useEffect, useState } from 'react';
import AnswersContainer from '../answers-container/answers-container';
import styles from './game.module.scss';
import type { GameType } from './type';

function Game({ question, handleNextButtonClick, handlePrevButtonClick, isLast, isFirst, handleExitButtonClick }: GameType) {
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleAnswerClick = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAnswer(evt.target.value);
  }

  useEffect(() => {
    setCurrentAnswer('');
  }, [question.question])


  return (
    <div className='game-screen'>
      <div className="container">
        <p className={styles.question}>{question.question}</p>
        <div className={styles.answers}>

          <AnswersContainer
            answers={question.answerOptions}
            currentAnswer={currentAnswer}
            handleAnswerClick={handleAnswerClick}
          />

        </div>

        <div className={styles['game-screen-bottom']}>
          <button
            className={styles['navigation-button-previous']}
            onClick={handlePrevButtonClick}
            disabled={isFirst}
          >
            Previous
          </button>

          {
            !isLast
              ?
              <button
                className={styles['navigation-button-next']}
                onClick={handleNextButtonClick}
                disabled={(isLast || !currentAnswer) ? true : false}
              >
                Next
              </button>
              :
              <button
                className={styles['navigation-button-next']}
                onClick={handleExitButtonClick}
                disabled={!currentAnswer}
              >
                End
              </button>
          }

        </div>

      </div>
    </div>
  );
}

export default Game;
