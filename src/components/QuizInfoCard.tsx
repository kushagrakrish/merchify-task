import { Button } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import { AiFillSignal, AiOutlineClockCircle } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { GiAlliedStar } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import ModalContentCard from "./ModalContentCard";

const items = [
  {
    icon: <MdOutlineAutoAwesomeMotion className='text-green-500' size={20} />,
    desc: "1 Attempt Daily",
  },
  {
    icon: <BsQuestionCircle className='text-green-500' size={20} />,
    desc: "5 Questions",
  },
  {
    icon: <AiOutlineClockCircle className='text-green-500' size={20} />,
    desc: "5 Minutes",
  },
  {
    icon: <HiOutlineDocumentText size={20} />,
    desc: "50% Passing Percentage",
  },
  {
    icon: <GiAlliedStar size={20} />,
    desc: "10 Karma/Day",
  },
];
const QuizInfoCard = () => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <h5 className='font-bold text-2xl xs:text-3xl text-[#4a4a68] w-11/12 md:w-full md:text-2xl lg:w-1/2 lg:text-3xl'>
        The Ultimate Indore Quiz: How Indori Are You Really?
      </h5>
      <p className='font-semibold text-lg xs:text-xl my-2 text-[#323247]'>
        The Quiz includes
      </p>
      {items?.map((item: any, idx) => (
        <div key={idx} className='flex gap-2 pt-2'>
          {item.icon}
          <p className='text-sm xs:text-base font-bold text-gray-600'>
            {item.desc}
          </p>
        </div>
      ))}

      <h6 className='font-bold text-base xs:text-lg mt-2 text-[#4a4a68]'>
        Skills You will Acquire
      </h6>
      <div className='flex items-center gap-x-2'>
        <div className='flex gap-2 mt-2 p-1 bg-white max-w-max rounded-2xl px-2'>
          <AiFillSignal className='text-green-500' size={20} />
          <p className='font-bold text-gray-500'>General knowledge</p>
        </div>
        <div className='flex gap-2 mt-2 p-1 bg-white max-w-max rounded-2xl px-2'>
          <AiFillSignal className='text-green-500' size={20} />
          <p className='font-bold text-gray-500'>Skills</p>
        </div>
      </div>
      <div className='flex items-center justify-center min-[380px]:justify-start'>
        <Button
          variant='contained'
          size='large'
          style={{
            backgroundColor: "purple",
            borderRadius: "20px",
            maxWidth: "140px",
            marginTop: "20px",
          }}
          onClick={handleButtonClick}
        >
          Take Quiz
        </Button>

        <SwipeableDrawer
          anchor='bottom'
          open={open}
          onClose={handleCloseDrawer}
          onOpen={() => {}}
          PaperProps={{
            style: {
              height: "450px",
              width: "100%",
            },
          }}
        >
          <ModalContentCard />
        </SwipeableDrawer>
      </div>
    </>
  );
};

export default QuizInfoCard;
