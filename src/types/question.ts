export interface IAnswerOption {
  id: string,
  text: string,
  isCorrect: boolean,
}

export interface IQuestion {
  id: string,
  question: string,
  answerOptions: IAnswerOption[],
};

export interface IUserAnswers {
  [questionId: string]: {
    answerId: string,
    isCorrect: boolean,
  }
}
