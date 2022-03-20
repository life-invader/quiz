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
}

const initialState: IAppSlice = {
  isPlaying: false,
  questions: QUESTIONS,
  currentQuestion: {
    position: 0,
    isFirst: true,
    isLast: false,
  },
};

const appSlice = createSlice({
  name: 'app-slice',
  initialState,
  reducers: {
    setIsPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload;
    },
    setNextQuestion(state) {
      const currentQuestion = state.currentQuestion;
      currentQuestion.position += 1;
      currentQuestion.isFirst = currentQuestion.position === 0 ? true : false;
      currentQuestion.isLast = (currentQuestion.position + 1) === state.questions.length ? true : false;
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
  },
})

export const { setIsPlaying, setCurrentQuestion, setNextQuestion, setPrevQuestion } = appSlice.actions
export default appSlice.reducer;
