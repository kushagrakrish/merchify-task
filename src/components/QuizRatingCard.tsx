import { Avatar, AvatarGroup, Rating } from "@mui/material";

const QuizRatingCard = () => {
  return (
    <>
      <div>
        <AvatarGroup total={50}>
          <Avatar
            alt='Manish Yadav'
            src='https://mui.com/static/images/avatar/2.jpg'
          />
          <Avatar
            alt='Tom holan'
            src='https://mui.com/static/images/avatar/5.jpg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://mui.com/static/images/avatar/2.jpg'
          />
        </AvatarGroup>
        <p className='text-gray-800 text-sm'>are competing</p>

        <div>
          <Rating name='read-only' value={4.5} readOnly />
          <p className='text-gray-800 text-sm sm:text-base'>4 Ratings (4.5)</p>
        </div>
      </div>
    </>
  );
};

export default QuizRatingCard;
