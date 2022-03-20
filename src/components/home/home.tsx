import type { HomeType } from "./type";
import styles from './home.module.scss';

function Home({ startGame }: HomeType) {
  return (
    <div className="container">
      <div className={styles.home}>
        <div className={styles['home-inner']}>
          <h1 className={styles.header}>Learn new concepts for each question</h1>
          <p className={styles.text}>We help you prepare for exams and quizes</p>
          <div className={styles['buttons-wrapper']}>
            <button
              className={styles['button-start']}
              onClick={startGame}
            >
              Start solving
            </button>
            <button className={styles['button-more']}>know more</button>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + '/img/home-pic.png'} alt="people" width='403px' height='408px' />
      </div>
    </div>
  )
}

export default Home;
