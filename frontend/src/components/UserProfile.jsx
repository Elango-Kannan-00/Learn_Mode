import { FaUserCircle } from 'react-icons/fa';

const UserProfile = ({username}) => {

  return (
    <div className="flex items-center p-2 rounded-lg shadow-md bg-gray-800">
      <FaUserCircle className="w-8 h-8 text-gray-500" />
      <div className="ml-2">
        <p className="text-sm font-semibold text-white">{username}</p>
        <p className="text-xs text-gray-400">abc@gmail.com</p>
      </div>
    </div>
  );
};

export default UserProfile;
