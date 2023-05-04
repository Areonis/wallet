import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.logoBlock}>
        <div>
          <Link to="/" className={styles.logo_link}>
            <div className={styles.logo}></div>
          </Link>
        </div>
        <div className={styles.logoText}>TUR-MIA</div>
        
      </div> */}
      <div className={styles.footer__item}></div>
      <div className={styles.footer__item}>
        Copyright © 2023 . Сайт собственность компании TUR-MIA.
      </div>
      <div className={styles.footer__item}><a href='http://turmiamchj.uz/'>Связаться с нами</a></div>
    </div>
  )
}
