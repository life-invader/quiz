import { AnswersContainerType } from "./type"
import styles from './answers-container.module.scss';

function AnswersContainer({ answers, currentAnswer, handleAnswerClick }: AnswersContainerType) {
  return (
    <>
      {
        answers.map((answer, index) => (
          <div key={answer.id} className={styles['button-wrapper']}>
            <input type="radio" name='question' id={`radio-${index}`} checked={currentAnswer === String(answer.id)} value={answer.id} onChange={handleAnswerClick} />
            <label htmlFor={`radio-${index}`}>
              <span>{index + 1}.</span>
              {answer.text}
            </label>
          </div>
        ))
      }
    </>
  )
}

export default AnswersContainer