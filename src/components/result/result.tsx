import styles from './result.module.scss';
import { ResultType } from './type';

function Result({result = 0, onExitClick}: ResultType) {
  return (
    <div className={styles.score}>
      <h2 className={styles.title}>Your Result</h2>
      <p className={styles.result}>{result}</p>
      <button onClick={onExitClick} className={styles.exit}>Exit</button>
    </div>
  );
}

export default Result;
