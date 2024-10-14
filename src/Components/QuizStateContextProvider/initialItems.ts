export interface QuizItem {
  title: string;
  labels: string[];
  values: string[];
  pageType: InputType;
  partitionKey: number;
  id: number;
}

export interface IFormInput {
  checkBoxes1: {
    apartment: boolean;
    land: boolean;
    car: boolean;
    otherProperty: boolean;
    none: boolean;
  };
  checkBoxes2: {
    mfo: boolean;
    carLoan: boolean;
    kingLoan: boolean;
    bailiff: boolean;
    privateLoans: boolean;
    other: boolean;
  };
  radioButtons1: {
    options: string;
  };
  radioButtons2: {
    options: string;
  };
  radioButtons3: {
    options: string;
  };
  radioButtons4: {
    options: string;
  };
  radioButtons5: {
    options: string;
  };
  radioButtons6: {
    options: string;
  };
  textFields: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface ConsultFormInput {
  personalInfo: {
    firstName: string;
    phone: string;
  };
}

export type InputType = 'TEXT' | 'CHECKBOX' | 'RADIO';

const quizItems: QuizItem[] = [
  {
    title: 'Какова сумма задолженности?',
    labels: [
      'от 200 000 т.р.',
      'от 250 000 до 500 000 т.р.',
      ' от 500 000 до 1000000',
      'от 1000 000 и больше',
    ],
    values: ['200', '250_500', '500_1000', '1000'],
    pageType: 'RADIO',
    partitionKey: 1,
    id: 0,
  },
  {
    title: 'Есть ли у Вас просрочки?',
    labels: ['нет', 'до 3 месяцев', 'более 3 месяцев'],
    values: ['none', 'three_month', 'more_three_month'],
    pageType: 'RADIO',
    partitionKey: 2,
    id: 1,
  },
  {
    title: 'Потребуется ли рассрочка на услуги банкротства?',
    labels: ['Да', 'Нет'],
    values: ['yes', 'no'],
    pageType: 'RADIO',
    partitionKey: 3,
    id: 2,
  },
  {
    title: 'Какое имущество у Вас имеется?',
    labels: [
      'квартира (единственное жилье)',
      'земельный участок',
      'автомобиль',
      'иное  имущество',
      'нет имущества',
    ],
    values: ['apartment', 'land', 'car', 'otherProperty', 'none'],
    pageType: 'CHECKBOX',
    partitionKey: 1,
    id: 3,
  },
  {
    title: 'Кому вы должны?',
    labels: [
      'микрофинансовым организациям',
      'автокредит',
      'потребительский кредит',
      'судебным приставам',
      'частные займы',
      'другое',
    ],
    values: ['mfo', 'carLoan', 'kingLoan', 'bailiff', 'privateLoans', 'other'],
    pageType: 'CHECKBOX',
    partitionKey: 2,
    id: 4,
  },
  {
    title: 'Каковы Ваши ежемесячные платежи по кредитам ?',
    labels: [
      'до 10 000',
      'от 10 000 до 30 000',
      'от 30 000 до 50 000',
      'более 50 000',
    ],
    values: ['10k', '10_30k', '30_50k', '50k'],
    pageType: 'RADIO',
    partitionKey: 4,
    id: 5,
  },
  {
    title: 'Совершали ли вы сделки с имуществом за последние 3 года ?',
    labels: ['Да', 'Нет'],
    values: ['yes', 'no'],
    pageType: 'RADIO',
    partitionKey: 5,
    id: 6,
  },

  {
    title: 'Как с Вами связаться ?',
    labels: ['по телефону', 'СМС', 'по вотцапу', 'телеграмм', 'е-mail'],
    values: ['phone', 'sms', 'whatsapp', 'telegram', 'email'],
    pageType: 'RADIO',
    partitionKey: 6,
    id: 7,
  },
  {
    title: 'Введите Ваши контакты.',
    labels: ['Введите Ваше имя*', 'Номер телефона*', 'Электронная почта'],
    values: ['name', 'phone', 'email'],
    pageType: 'TEXT',
    partitionKey: 1,
    id: 8,
  },
];

export default quizItems;
