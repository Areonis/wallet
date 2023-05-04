import styles from './Block.module.scss'
import TextBlock from './TextBlock'
import wallet from '../../assets/wallet-13.png'

export default function TextContainer({ title, text, className, flag }) {
  return (
    <div className={styles.textContainer}>
      {flag ? (
        <div className={styles.miniLogo}>
          <img src={wallet} alt="wallet" />
        </div>
      ) : null}
      <TextBlock className={className}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </TextBlock>

      {/* <div className={styles.line}></div> */}
    </div>
  )
}
