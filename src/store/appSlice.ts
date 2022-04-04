import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QUESTIONS } from '../data';
import { IQuestion } from '../types/question';

interface ICurrentQuestion {
  position: number,
  isFirst: boolean,
  isLast: boolean,
}

interface IAppSlice {
  isPlaying: boolean,
  questions: IQuestion[],
  currentQuestion: ICurrentQuestion,
  totalScore: number,
  userAnswers: boolean[],
}

const initialState: IAppSlice = {
  isPlaying: false,
  questions: QUESTIONS,
  currentQuestion: {
    position: 0,
    isFirst: true,
    isLast: false,
  },
  totalScore: 0,
  userAnswers: [],
};

const appSlice = createSlice({
  name: 'app-slice',
  initialState,
  reducers: {
    setIsPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload;
      state.userAnswers = new Array(state.questions.length).fill(null);
    },
    setNextQuestion(state, action: PayloadAction<string>) {
      const currentQuestion = state.currentQuestion;

      const answer = state.questions
        .find((_item, index) => index === currentQuestion.position)?.answerOptions
        .find((item) => item.id === action.payload);

      if (answer?.isCorrect) {
        state.totalScore++;
        state.userAnswers[currentQuestion.position] = true;
      } else {
        state.userAnswers[currentQuestion.position] = false;
      }

      currentQuestion.position += 1;
      currentQuestion.isFirst = currentQuestion.position === 0 ? true : false;
      currentQuestion.isLast = (currentQuestion.position + 1) === state.questions.length ? true : false;

      if (currentQuestion.position === state.questions.length) {
        state.isPlaying = false;
        const currentQuestion = state.currentQuestion;
        currentQuestion.position = 0;
        currentQuestion.isFirst = currentQuestion.position === 0 ? true : false;
        currentQuestion.isLast = (currentQuestion.position + 1) === state.questions.length ? true : false;
      }
    },
    setPrevQuestion(state) {
      const currentQuestion = state.currentQuestion;
      currentQuestion.position -= 1;
      currentQuestion.isFirst = currentQuestion.position === 0 ? true : false;
      currentQuestion.isLast = (currentQuestion.position + 1) === state.questions.length ? true : false;
    },
    setCurrentQuestion(state, action: PayloadAction<number>) {
      const currentQuestion = state.currentQuestion;
      currentQuestion.position = action.payload;
      currentQuestion.isFirst = currentQuestion.position === 0 ? true : false;
      currentQuestion.isLast = (currentQuestion.position + 1) === state.questions.length ? true : false;
    },
    saveUserAnswer(state, action) {
      const currentQuestion = state.currentQuestion;
      currentQuestion.position = action.payload;
      currentQuestion.isFirst = currentQuestion.position === 0 ? true : false;
      currentQuestion.isLast = (currentQuestion.position + 1) === state.questions.length ? true : false;
    },
  },
})

export const { setIsPlaying, setCurrentQuestion, setNextQuestion, setPrevQuestion, saveUserAnswer } = appSlice.actions
export default appSlice.reducer;
