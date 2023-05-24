import React, { createContext, useState, ReactNode } from "react";

interface ContextValue {
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

export const QuizContext = createContext<ContextValue | undefined>(undefined);

interface QuizContextProviderProps {
  children: ReactNode;
}

const QuizContextProvider: React.FC<QuizContextProviderProps> = ({
  children,
}) => {
  const [time, setTime] = useState(300);
  const [questNo, setQuestNo] = useState<number>(1);
  const [rightAns, setRightAns] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <QuizContext.Provider
      value={{
        time,
        setTime,
        questNo,
        setQuestNo,
        rightAns,
        setRightAns,
        questions,
        setQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
