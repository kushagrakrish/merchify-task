import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQuizStore from "../utils/QuizStore";

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const remainingSeconds = time % 60;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

const Timer = () => {
  const navigate = useNavigate();
  const { time, setTime, questNo } = useQuizStore() || {};

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);
        navigate("/result"); // Navigate to "/result" when the time becomes zero
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time, setTime, navigate]);

  // const minutes = Math.floor(time / 60);
  // const remainingSeconds = time % 60;

  // const formattedMinutes = minutes.toString().padStart(2, "0");
  // const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  return (
    <>
      <div className='flex justify-between px-20 items-center mb-3'>
        <div className='bg-[#68258a] rounded-2xl'>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold bg-lightgreen text-white py-1 px-3 rounded-2xl'>
            {questNo}/{5}
          </p>
        </div>
        <div className='bg-[#68258a] rounded-2xl'>
          <p className='text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-semibold bg-purple text-white py-1 px-3 rounded-2xl'>
            {time && formatTime(time)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Timer;
