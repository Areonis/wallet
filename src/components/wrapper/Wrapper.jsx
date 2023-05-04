import styles from './Wrapper.module.scss'

export default function Wrapper({ children, className }) {
  return <div className={styles[className]}>{children}</div>
}
