import QuizDetailCard from "../components/QuizDetailCard";
import QuizInfoCard from "../components/QuizInfoCard";
import QuizRatingCard from "../components/QuizRatingCard";

const Home = () => {
  return (
    <>
      <div className='w-11/12 min-h-screen bg-gray-200 flex flex-col items-start gap-2 mx-auto pt-3 lg:flex-row xs:flex-col xs:items-start lg:items-start md:gap-x-10 md:pt-10'>
        <div className='rounded-md w-full lg:w-3/5 xs:w-full'>
          <div>
            <img
              className='w-full'
              alt='Indore Banner'
              src='https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-file-image%252Fwebp-1678940747002-Indore%20Quiz.webp'
            />
          </div>
          <div className='flex justify-between mt-5'>
            <div>
              <QuizDetailCard />
            </div>
            <QuizRatingCard />
          </div>
        </div>
        <div>
          <QuizInfoCard />
        </div>
      </div>
    </>
  );
};

export default Home;
