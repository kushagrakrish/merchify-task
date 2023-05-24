import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useQuizStore from "../utils/QuizStore";

const QuizQuestion = () => {
  const navigate = useNavigate();
  const [currentAns, setCurrentAns] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const { questNo, setQuestNo, rightAns, setRightAns, questions } =
    useQuizStore();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAns(event.target.value);
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (currentAns === currentQuestion?.answer) {
      setRightAns(rightAns + 1);
    }

    setCurrentAns(""); // Reset the selected answer after moving to the next question

    if (questNo < questions.length) {
      setQuestNo(questNo + 1);
    } else {
      navigate("/result");
    }
  };

  useEffect(() => {
    setSelectedOption(currentAns);
  }, [currentAns]);

  useEffect(() => {
    setIsNextButtonDisabled(selectedOption === "");
  }, [selectedOption]);

  if (!questions.length) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[questNo - 1];

  return (
    <>
      <div className='px-20'>
        <p className='text-sm font-semibold text-[#323247] sm:text-xl'>
          {questNo}.<span>{currentQuestion?.question}</span>
        </p>
        <div className='flex flex-col gap-5 my-7'>
          {currentQuestion?.options?.map((option, i) => (
            <label className='cursor-pointer text-sm sm:text-lg font-normal text-gray-800'>
              <div
                key={i}
                className='p-3 shadow-sm cursor-pointer rounded-md bg-gray-100 text-start'
              >
                <input
                  name={`question-${questNo}`}
                  required={true}
                  type='radio'
                  value={option}
                  className='mr-2 cursor-pointer'
                  onChange={handleOptionChange}
                  checked={currentAns === option}
                />
                {option}
              </div>
            </label>
          ))}
        </div>

        <div
          className={`max-w-max m-auto mt-3 ${
            questNo < 5 ? "block" : "hidden"
          }`}
        >
          <button
            onClick={handleNextQuestion}
            className={`bg-[#68258a] rounded-md w-36 font-semibold max-w-140px px-4 py-2 text-white ${
              isNextButtonDisabled ? "cursor-not-allowed bg-[#952ec966]" : ""
            }`}
            disabled={isNextButtonDisabled}
          >
            Next
          </button>
        </div>

        <div
          className={`max-w-max m-auto mt-3 ${
            questNo === 5 ? "block" : "hidden"
          }`}
        >
          <button
            disabled={isNextButtonDisabled}
            onClick={handleNextQuestion}
            className={`bg-[#68258a] rounded-md w-36 font-semibold max-w-140px px-4 py-2 text-white ${
              isNextButtonDisabled ? "cursor-not-allowed bg-[#952ec966]" : ""
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizQuestion;
