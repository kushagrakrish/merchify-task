import { create } from "zustand";

interface QuizStore {
  time: number;
  setTime: (value: number) => void;
  rightAns: number;
  setRightAns: (value: number) => void;
  questNo: number;
  setQuestNo: (value: number) => void;
  questions: Question[];
  setQuestions: (value: Question[]) => void;
}

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const useQuizStore = create<QuizStore>((set) => ({
  time: 300,
  setTime: (value) => set(() => ({ time: value })),
  questNo: 1,
  setQuestNo: (value) => set(() => ({ questNo: value })),
  rightAns: 0,
  setRightAns: (value) => set(() => ({ rightAns: value })),
  questions: [],
  setQuestions: (value) => set(() => ({ questions: value })),
}));

export default useQuizStore;
