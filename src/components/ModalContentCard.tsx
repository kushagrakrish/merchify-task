import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import TimerIcon from "@mui/icons-material/Timer";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const items = [
  {
    icon: <TimerIcon fontSize='large' />,
    title: "5 Min",
    desc: "Keep in mind that it is a time-bound quiz.",
  },
  {
    icon: <HelpIcon fontSize='large' />,
    title: "5 Questions",
    desc: "Try to answer all 5 questions",
  },
  {
    icon: <BookmarkIcon fontSize='large' />,
    title: "50% Passing criteria",
    desc: "All the best see you in the quiz",
  },
];

const ModalContentCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='px-5 '>
        <h1 className='font-bold text-2xl xs:text-2xl my-2 text-[#323247] xs:mt-5 '>
          Quiz Rules
        </h1>
        <div className='flex flex-col gap-y-3 mt-5 xs:py-6 xs:gap-y-10'>
          {items?.map((item: any, idx: number) => (
            <>
              <div className='xs:flex items-center gap-x-5'>
                <div>{item.icon}</div>
                <div>
                  <h2 className='font-semibold text-lg xs:text-xl text-[#4a4a68]'>
                    {item.title}
                  </h2>
                  <p className='font-normal text-base xs:text-xl text-gray-700'>
                    {item.desc}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <Button
            variant='contained'
            size='large'
            style={{
              backgroundColor: "purple",
              borderRadius: "20px",
              maxWidth: "140px",
              marginTop: "15px",
            }}
            onClick={() => navigate("/quiz")}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </>
  );
};

export default ModalContentCard;
