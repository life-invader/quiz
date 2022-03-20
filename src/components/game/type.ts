import { IQuestion } from "../../types/question";

export type GameType = {
  question: IQuestion,
  handleNextButtonClick: () => void,
  handlePrevButtonClick: () => void,
  currentQuestion: number,
  questionsAmount: number,
  nextButtonDisabled: boolean;
  prevButtonDisabled: boolean;
};
