import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import styles from './Layout.module.scss'
import BlockContainer from '../block/BlockContainer'
import ImageBlock from '../block/ImageBlock'
import { singleCenterBlock } from '../../data/data'
import TextContainer from '../block/TextContainer'

export default function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <Header />
        <BlockContainer className={'blockContainer'}>
          <TextContainer
            title={singleCenterBlock.title}
            text={singleCenterBlock.text}
            className="white"
            flag={true}
          />
          <ImageBlock
            className="linear_1"
            src="https://st20.styapokupayu.ru/images/blog_posts/covers/000/243/604_large.jpg?1560510679"
          />
        </BlockContainer>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
