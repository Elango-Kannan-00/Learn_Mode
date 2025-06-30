import { UserContext } from './UserContext';
import { useState } from 'react';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(UserContext.state);
  console.log('UserProvider', user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
