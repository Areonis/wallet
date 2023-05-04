import { motion, AnimatePresence } from 'framer-motion'
import Item from './item/Item'
import { data_footer, singleCenterBlock } from '../../data/data'
import styles from './Menu.module.scss'
import BlockContainer from '../block/BlockContainer'
import ImageBlock from '../block/ImageBlock'
import TextContainer from '../block/TextContainer'

export default function Menu({ items }) {
  const textAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {items.map((item, i) => {
          return (
            <AnimatePresence key={item.ind}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: '1%' }}
                variants={textAnimation}
              >
                <Item item={item} key={item.ind} />
              </motion.div>
            </AnimatePresence>
          )
        })}
      </div>
      <BlockContainer className={'blockContainer_footer'}>
        <ImageBlock src="https://stecpoint.ru/wp-content/uploads/Variant-2.png" />
        <TextContainer
          text={singleCenterBlock.action()}
          className="blue"
          flag={false}
        />
      </BlockContainer>
      <div className={styles.image_div}>
        <img
          src={data_footer.img}
          title={data_footer.title}
          className={styles.image_all}
          alt="all"
        />
      </div>
    </div>
  )
}
