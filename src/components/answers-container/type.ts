import { IAnswerOption } from '../../types/question';

export type AnswersContainerType = {
  answers: IAnswerOption[],
  currentAnswer: string,
  handleAnswerClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}