import { IQuestion } from "../../types/question";

export type GameType = {
  question: IQuestion,
  isLast: boolean;
  isFirst: boolean;
  handleNextButtonClick: (answer: string) => () => void,
  handlePrevButtonClick: () => void,
  handleExitButtonClick: (answer: string) => () => void,
  userAnswers: boolean[]
};
