import type { HomeType } from "./type";
import styles from './home.module.scss';

function Home({ startGame }: HomeType) {
  return (
    <div className={styles.home}>
      <p>React quiz game</p>
      <button className={styles['start-button']} onClick={startGame}>Начнем</button>
    </div>
  )
}

export default Home;
