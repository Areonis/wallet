import styles from './Header.module.scss'
import CustomLink from '../../links/CustomLink'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.logoBlock}>
        <div>
          <Link to="/" className={styles.logo_link}>
            <div className={styles.logo}></div>
          </Link>
        </div>
        <div></div>       
        <Link to="/" style={{textDecoration: 'none', cursor: 'default'}}><div className={styles.logoText}>TUR-MIA</div></Link>
      </div>

      <nav className={styles.navMenu}>
        <div>
          <CustomLink to="/requisites" className="outline">
            Реквизиты
          </CustomLink>
        </div>

        <div>
          <CustomLink to="/policy-page" className="outline">
            Политика конфиденциальности
          </CustomLink>
        </div>
      </nav>
    </div>
  )
}
