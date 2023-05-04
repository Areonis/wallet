import imageAll from '../assets/all.png'

export const data = [
  {
    ind: 1,
    short: 'Карты',
    title: 'Добавляйте карты разных банков.',
    img: '',
    ion: 'card',
  },
  {
    ind: 2,
    short: 'Переводы',
    title:
      'Переводите деньги в банки Таджикистана и СНГ любым способом: с карт или кошелька.',
    img: '',
    ion: 'arrow-redo',
  },
  {
    ind: 3,
    short: 'Пополнение',
    title:
      'Пополняйте балансы телефонов Tcell, Babilon Mobile, Beeline, МТС, Мегафон и других операторов СНГ.',
    img: '',
    ion: 'cash',
  },
  {
    ind: 4,
    short: 'Платежи',
    title:
      'Оплачивайте штрафы ГИБДД, счета за ЖКХ, школу и детский сад по QR-коду.',
    img: '',
    ion: 'logo-paypal',
  },
  {
    ind: 5,
    short: 'Cashback',
    title: 'Получайте Cashback за покупки.',
    img: '',
    ion: 'diamond',
  },
  {
    ind: 6,
    short: 'Шаблоны',
    title: 'Создавайте шаблоны платежей и автоплатежи.',
    img: '',
    ion: 'copy',
  },
  {
    ind: 7,
    short: 'Анализ',
    title:
      'Анализируйте расходы за любой период. Читайте рекомендации по управлению деньгами.',
    img: '',
    ion: 'information',
  },
  {
    ind: 8,
    short: 'Рекомендации',
    title: 'Узнайте рекомендации по управлению деньгами.',
    img: '',
    ion: 'logo-reddit',
  },
]

export const data_footer = {
  ind: 9,

  title: '',
  img: imageAll,
}

export const singleCenterBlock = {
  title: 'Кошелёк',
  text: 'Это удобное приложение для платежей, покупок и переводов.',
  action: () => (
    <div>
      Скачайте, <br />
      зарегистрируйтесь за 1 минуту по номеру телефона и управляйте деньгами
      онлайн
    </div>
  ),
}
