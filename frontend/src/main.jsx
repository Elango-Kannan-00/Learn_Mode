import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import { UserContext } from './context/UserContext.js'


createRoot(document.getElementById('root')).render(
  <UserContext.Provider value={{ user: '', email: '', setUser: () => {} }}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </UserContext.Provider>
)
