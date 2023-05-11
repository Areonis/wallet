import CustomLink from '../components/links/CustomLink'
import styles from './Page.module.scss'
import React from 'react'

export default function Requisites() {
  return (
    <div className={styles.root}>
      <CustomLink to={'/'} className="back">
        На Главную
      </CustomLink>

      <div className={styles.title}>Реквизиты</div>

      <div className={styles.requisites}>
        <div className={styles.row}>
          <div className={styles.row_item}>
            Реквизиты Полное наименование (согласно учредительным документам):
          </div>
          <div></div>
          <div className={styles.row_item}>
            "TUR-MIA" mas'uliyati cheklangan jamiyati
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>
            Сокращенное наименование(согласно учредительным документам):
          </div>
          <div></div>
          <div className={styles.row_item}>LLC "TUR-MIA" MCHJ</div>
        </div>
        <div className={styles.row}>
          <div className={styles.row_item}>Название компании:</div>
          <div></div>
          <div className={styles.row_item}>TUR-MIA</div>
        </div>
        <div className={styles.row}>
          <div className={styles.row_item}>Адрес местонахождения:</div>
          <div></div>
          <div className={styles.row_item}>
            Toshkent shahri, Mirobod tumani, Salar MFY, Nukus ko'chasi, 29-uy
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>ИНН:</div>
          <div></div>
          <div className={styles.row_item}> 309801239</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Расчетный счет:</div>
          <div></div>
          <div className={styles.row_item}> 20208000805591030001</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Наименование учреждения банка:</div>
          <div></div>
          <div className={styles.row_item}>
            TASHKENT city., "ASIA ALLIANCE BANK" ATB MIROBAD BRANCH
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Адрес:</div>
          <div></div>
          <div className={styles.row_item}>
            {' '}
            100170. Tashkent, Mirabad district, st.Fargonayuli, 532/1
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Телефоны:</div>
          <div></div>
          <div className={styles.row_item}> +79810485696</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Почта:</div>
          <div></div>
          <div className={styles.row_item}> info@turmiamchj.uz</div>
        </div>

        <div className={styles.row}>
          <div className={styles.row_item}>Генеральный директор:</div>
          <div></div>
          <div className={styles.row_item}>
            {' '}
            ABDURAZAKOV SHUXRAT SADRETDINOVICH
          </div>
        </div>
      </div>
    </div>
  )
}
