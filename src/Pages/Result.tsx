import { useContext } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { QuizContext } from "../context/QuizContext";

const IconItems = [
  {
    icon: <FaWhatsappSquare className='text-green-600' />,
    desc: "Whatsapp",
  },
  {
    icon: <AiFillTwitterCircle className='text-blue-500' />,
    desc: "Twitter",
  },
  {
    icon: <BsFacebook className='text-blue-800' />,
    desc: "Facebook",
  },
  {
    icon: <BsLinkedin className='text-blue-900' />,
    desc: "LinkedIn",
  },
];

const Result = () => {
  const contextValue = useContext(QuizContext);

  if (!contextValue) {
    return null;
  }

  const { time, rightAns } = contextValue;

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const items = [
    {
      title: "Your Score",
      desc: rightAns + "/" + 5,
    },
    {
      title: "Time Taken",
      desc: formatTime(time) + " mins.",
    },
  ];

  return (
    <>
      <div className='min-h-screen bg-gray-100 px-5 pt-6'>
        <div className='w-full md:w-11/12 mx-auto xl:w-3/5'>
          <div className='shadow-md p-2 rounded-10 bg-white  md:block'>
            <img
              className='w-full'
              alt='Indore Banner'
              src='https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-file-image%252Fwebp-1678940747002-Indore%20Quiz.webp'
            />
          </div>

          <div className='pt-4'>
            <p className='text-[#4a4a68] text-2xl font-bold text-center mb-5'>
              The Ultimate Indore Quiz: How Indori Are You Really?
            </p>
          </div>
          {/* Result*/}
          <div className='flex gap-4 pt-2 flex-col md:flex-row '>
            {/* Score in percentage */}
            <div className='text-center w-full md:w-40 mx-auto'>
              <p className='font-bold text-base text-green-700 md:text-lg'>
                You Scored:
              </p>
              <p className='font-bold text-base text-green-700 md:text-lg'>
                {rightAns * 20 + "%"}
              </p>
            </div>

            <div className='flex w-full md:w-60 mx-auto'>
              {/* Score in No */}
              {items?.map((item, idx) => (
                <div className='text-center w-1/2 md:text-lg'>
                  <p className='font-semibold text-gray-800'>{item.title}:</p>
                  <p className='font-semibold text-gray-800'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <p className='text-sm text-gray-700 font-medium mt-1 text-center md:text-lg'>
            Success is not final, failure is not fatal. It is the courage to
            continue that counts.
          </p>
          <div className=' md:block mt-2'>
            <div className='max-w-max mx-auto grid grid-cols-2 gap-4 py-1 md:grid-flow-row md:flex'>
              {IconItems?.map((item, idx) => (
                <div className='flex items-center space-x-1 cursor-pointer'>
                  {item.icon}
                  <p className='text-xs text-gray-800 font-bold hover:text-gray-400 md:text-sm hover:ease-in hover:delay-100'>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
