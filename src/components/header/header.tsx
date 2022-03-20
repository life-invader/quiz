import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles['main-nav']}>
          <a href="#">
            <img className={styles.logo} src={process.env.PUBLIC_URL + '/img/quiz-logo.svg'} alt="logo" width='145px' height='33px' />
          </a>
          <ul className={styles['nav-list']}>
            <li className={styles['nav-list-item']}>
              <a className={styles['nav-list-link']} href="#">How it works?</a>
            </li>
            <li className={styles['nav-list-item']}>
              <a className={styles['nav-list-link']} href="#">Features</a>
            </li>
            <li className={styles['nav-list-item']}>
              <a className={styles['nav-list-link']} href="#">About us</a>
            </li>
          </ul>
          <a className={styles['login-button']} href="#">Login</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;
