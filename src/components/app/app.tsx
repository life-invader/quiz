import GameContainer from '../game-container/game-container';
import Header from '../header/header';
import styles from './app.module.scss';
import type { AppType } from './type';

function App({ questions }: AppType) {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <GameContainer questions={questions} />
      </div>
    </>
  );
}

export default App;
