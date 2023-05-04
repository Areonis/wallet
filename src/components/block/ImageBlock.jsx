import styles from './Block.module.scss'

export default function ImageBlock({ classname, src }) {
  return (
    <div className={styles.imageBlock}>
      <img src={src} alt="some" />
    </div>
  )
}
