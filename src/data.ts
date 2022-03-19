import { IQuestion } from './types/question';

export const QUESTIONS: IQuestion[] = [
  {
    question: 'Текст первого вопроса',
    answerOptions: [
      {
        id: 1,
        text: 'Текст ответа 1',
        isCorrect: true,
      },
      {
        id: 2,
        text: 'Текст ответа 2',
        isCorrect: false,
      },
      {
        id: 3,
        text: 'Текст ответа 3',
        isCorrect: false,
      },
      {
        id: 4,
        text: 'Текст ответа 4',
        isCorrect: false,
      },
    ],
  },
  {
    question: 'Текст второго вопроса',
    answerOptions: [
      {
        id: 1,
        text: 'Текст ответа 1',
        isCorrect: false,
      },
      {
        id: 2,
        text: 'Текст ответа 2',
        isCorrect: false,
      },
      {
        id: 3,
        text: 'Текст ответа 3',
        isCorrect: true,
      },
      {
        id: 4,
        text: 'Текст ответа 4',
        isCorrect: false,
      },
    ],
  },
  {
    question: 'Текст третьего вопроса',
    answerOptions: [
      {
        id: 1,
        text: 'Текст ответа 1',
        isCorrect: false,
      },
      {
        id: 2,
        text: 'Текст ответа 2',
        isCorrect: false,
      },
      {
        id: 3,
        text: 'Текст ответа 3',
        isCorrect: false,
      },
      {
        id: 4,
        text: 'Текст ответа 4',
        isCorrect: true,
      },
    ],
  },
  {
    question: 'Текст четвертого вопроса',
    answerOptions: [
      {
        id: 1,
        text: 'Текст ответа 1',
        isCorrect: false,
      },
      {
        id: 2,
        text: 'Текст ответа 2',
        isCorrect: true,
      },
      {
        id: 3,
        text: 'Текст ответа 3',
        isCorrect: false,
      },
      {
        id: 4,
        text: 'Текст ответа 4',
        isCorrect: false,
      },
    ],
  },
];
