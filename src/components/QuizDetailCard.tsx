import { BsBookmark } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { RiSwordLine } from "react-icons/ri";

const items = [
  {
    icon: <FaRegCommentDots className='text-green-500' size={20} />,
    desc: "Comment",
  },
  {
    icon: <RiSwordLine className='text-gray-500' size={20} />,
    desc: "Invite Friends",
  },
  {
    icon: <BsBookmark className='text-purple-500' size={20} />,
    desc: "Save Quiz",
  },
];

const QuizDetailCard = () => {
  return (
    <>
      {items?.map((item, idx) => (
        <div key={idx} className='flex gap-2'>
          {item.icon}
          <p key={idx} className='text-xs font-semibold sm:text-base my-1'>
            {item.desc}
          </p>
        </div>
      ))}
    </>
  );
};

export default QuizDetailCard;
