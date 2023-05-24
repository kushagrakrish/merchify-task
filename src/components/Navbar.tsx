import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

const items = [
  {
    icon: (
      <NotificationsNoneIcon
        fontSize='large'
        className='cursor-pointer hover:text-gray-700 ease-out delay-75'
      />
    ),
  },
  {
    icon: (
      <SearchIcon
        fontSize='large'
        className='cursor-pointer hover:text-gray-700 ease-out delay-75'
      />
    ),
  },
  {
    icon: (
      <AccountCircleIcon
        fontSize='large'
        className='cursor-pointer hover:text-gray-700 ease-out delay-75'
      />
    ),
  },
];
const Navbar = () => {
  return (
    <div className='flex items-center sticky justify-center md:justify-between mx-auto w-11/12 py-3'>
      <div className='flex items-center w-32 cursor-pointer'>
        <img
          alt='logo'
          src='https://www.seekho.ai/assets/images/seekho-logo.webp'
        />
      </div>
      <div className='hidden md:flex gap-x-6 items-center '>
        {items?.map((item: any, idx) => (
          <div key={idx}>{item.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
