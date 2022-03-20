import { IQuestion } from "../../types/question";

export type GameType = {
  question: IQuestion,
  isLast: boolean;
  isFirst: boolean;
  handleNextButtonClick: () => void,
  handlePrevButtonClick: () => void,
  handleExitButtonClick: () => void,
};
