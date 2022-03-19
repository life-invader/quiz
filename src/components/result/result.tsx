import styles from './result.module.scss';
import type { ResultType } from './type';

function Result({ totalScore, questionsAmount, handleRefresh }: ResultType) {

  return (
    <div className={styles.score}>
      <div>Правильных ответов {totalScore} из {questionsAmount}</div>
      <button className={styles.refresh} onClick={handleRefresh}>Еще раз</button>
    </div>
  );
}

export default Result;
