import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function TopBar() {
  const { user } = useContext(UserContext);
  const [username] = user ? user.username : 'Guest';
  const [email] = user ? user.email : 'abc@gmail.com';
  console.log("TopBar component rendered with user:", user);
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-2 flex justify-between items-center shadow-lg z-30">
      <div className="w-1/3">
        {/* Empty div for spacing */}
      </div>
      <div className="w-1/3 flex justify-center">
        <SearchBar />
      </div>
      <div className="w-1/3 flex justify-end">
        { user ? (<UserProfile username={user.username||username} email={user.email||email} />) : (
          <div className="text-gray-400">Loading user...</div>
        ) }
      </div>
    </div>
  );
}

export default TopBar;
