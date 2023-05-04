import styles from './Block.module.scss'

export default function BlockContainer({ children, className }) {
  return <div className={styles[className]}> {children} </div>
}
