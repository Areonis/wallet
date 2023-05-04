import clsx from 'clsx'
import styles from './Block.module.scss'

export default function TextBlock ({className, children}) {
  return (<div className={clsx(styles.textBlock, styles[className])}>{children}</div>)
}