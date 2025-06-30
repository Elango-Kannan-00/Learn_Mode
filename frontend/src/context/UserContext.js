import { createContext  } from 'react';


const state = { 
  username: '',
  email:''
}
export const UserContext = createContext(state);
console.log('UserContext', UserContext.state);


