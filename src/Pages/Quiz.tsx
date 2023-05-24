import { useEffect } from "react";
import QuizQuestion from "../components/QuizQuestion";
import Timer from "../components/Timer";
import { QuestionData } from "../data/questions";
import useQuizStore from "../utils/QuizStore";

const Quiz = () => {
  const { questions, setQuestions } = useQuizStore();

  useEffect(() => {
    const getRandomQuestions = (questionData: any, count: any) => {
      const shuffledData = questionData.sort(() => 0.5 - Math.random());
      return shuffledData.slice(0, count);
    };

    const randomQuestions = getRandomQuestions(QuestionData, 5);

    setQuestions(randomQuestions);
  }, []);

  if (questions.length === 0) {
    return <div>Loading questions please wait...</div>;
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
