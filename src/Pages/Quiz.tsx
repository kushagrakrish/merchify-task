import QuizQuestion from "../components/QuizQuestion";
import Timer from "../components/Timer";
import React, { useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";
import { Box } from "@mui/material";
import { QuestionData } from "../data/questions";

interface Question {
  question: string;
  options: string[];
  answer: string;
}
const Quiz = () => {
  const contextValue = useContext(QuizContext);

  useEffect(() => {
    if (!contextValue) {
      return;
    }

    const { setQuestions } = contextValue;

    const getRandomQuestions = (
      QuestionData: Question[],
      count: number
    ): Question[] => {
      const shuffledData = QuestionData.sort(() => 0.5 - Math.random());
      return shuffledData.slice(0, count);
    };

    // Assuming you have a `data` array containing all your questions
    const randomQuestions = getRandomQuestions(QuestionData, 5);

    setQuestions(randomQuestions);
  }, []);

  if (!contextValue) {
    return null;
  }

  const { questions } = contextValue;

  if (questions.length === 0) {
    // Handle loading state or wait for questions to load
    return <div>Loading questions...</div>;
  }
  return (
    <>
      <div className='h-screen bg-gray-200 mt-5'>
        <Timer />
        <QuizQuestion />
      </div>
    </>
  );
};

export default Quiz;
