import styles from './game.module.scss';
import type { GameType } from './type';

function Game({ question, handleAnswerClick, currentQuestion, questionsAmount: quastionsAmount }: GameType) {
  return (
    <div className={styles.quiz}>
      <div className={styles.question}>
        <div className={styles['question-count']}>
          <span>Вопрос {currentQuestion}</span> / {quastionsAmount}
        </div>
        <div className={styles['question-text']}>{question.question}</div>
      </div>

      <div className={styles.answer}>
        {
          question.answerOptions.map((answer) => (
            <button key={answer.id} onClick={() => handleAnswerClick(answer.isCorrect)}>{answer.text}</button>
          ))
        }
      </div>
    </div>
  );
}

export default Game;
