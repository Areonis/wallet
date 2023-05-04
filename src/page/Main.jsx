import BlockContainer from '../components/block/BlockContainer'
import TextBlock from '../components/block/TextBlock'
import Menu from '../components/menu/Menu'
import { data } from '../data/data'
import styles from './Page.module.scss'

export default function Main() {
  return (
    <div className={styles.root}>
      <BlockContainer className={'blockContainer'}>
        <TextBlock className="single">
          <div className={styles.single_title}>Преимущества</div>
          <div className={styles.single_text}>
            Огромные возможности использования кошелька делают его незаменимым
            помощником
          </div>
        </TextBlock>
      </BlockContainer>
      <Menu items={data} />
    </div>
  )
}
