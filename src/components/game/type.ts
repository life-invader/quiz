import { IQuestion } from "../../types/question";

export type GameType = {
  question: IQuestion,
  handleAnswerClick: (isCorrect: boolean) => void,
  currentQuestion: number,
  questionsAmount: number,
};
