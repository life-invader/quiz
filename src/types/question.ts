interface IAnswerOption {
  id: number,
  text: string,
  isCorrect: boolean,
}

export interface IQuestion {
  question: string,
  answerOptions: IAnswerOption[],
};
