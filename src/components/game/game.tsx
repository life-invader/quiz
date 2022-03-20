import React, { useEffect, useState } from 'react';
import styles from './game.module.scss';
import type { GameType } from './type';

function Game({ question, handleNextButtonClick, currentQuestion, questionsAmount, nextButtonDisabled, prevButtonDisabled, handlePrevButtonClick }: GameType) {
  const [answerChecked, setAnswerChecked] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');

  const handleRadioClick = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target);
    setCurrentAnswer(evt.target.value);
    setAnswerChecked(true);
  }

  useEffect(() => {
    setCurrentAnswer('-1');
    setAnswerChecked(false);
  }, [question.question])


  return (
    <div className='game-screen'>
      <div className="container">
        <p className={styles.question}>{question.question}</p>
        <div className={styles.answers}>

          {
            question.answerOptions.map((answer, index) => (
              <div key={answer.id} className={styles['button-wrapper']}>
                <input type="radio" name='question' id={`radio-${index}`} checked={currentAnswer === String(answer.id)} value={answer.id} onChange={handleRadioClick} />
                <label htmlFor={`radio-${index}`}>
                  <span>{index + 1}.</span>
                  {answer.text}
                </label>
              </div>
            ))
          }

        </div>

        <div className={styles['game-screen-bottom']}>
          <button
            className={styles['navigation-button-previous']}
            onClick={handlePrevButtonClick}
            disabled={prevButtonDisabled}
          >
            Previous
          </button>
          <button
            className={styles['navigation-button-next']}
            onClick={handleNextButtonClick}
            disabled={(nextButtonDisabled || !answerChecked) ? true : false}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default Game;
