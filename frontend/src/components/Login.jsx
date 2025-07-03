import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from '../context/UserContext'; 

function Login() {
  const { setUser } = useContext(UserContext);
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate(); // <-- Moved here

  console.log("Login component rendered");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(`Input changed: ${name} = ${value}`);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formState.username,
          password: formState.password,
        }),
      });
      console.log("Response status:", response.status); 
      if (response.ok) {
        const data = await response.json();
       // console.log("Login successful", data);
        console.log("Setting user:", data.user);
        const token = data.token; 
        localStorage.setItem('token', token); 
        console.log("Token stored in localStorage:", token);
        setUser(data.user); 
        navigate('/'); // <-- Now works correctly
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-fit rounded-full bg-blue-100 p-3 shadow-md z-10">
        <svg className="h-10 w-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <div className="flex w-full flex-col rounded-2xl border border-gray-200 bg-white/80 p-8 pt-12 shadow-xl backdrop-blur-sm animate-fade-in">
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-blue-600">Sign In</h2>
        <div className="mb-4 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600" htmlFor="email">Username</label> {/* Fixed */}
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            className="rounded-lg border-2 border-blue-200 bg-blue-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 outline-none"
            value={formState.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600" htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="rounded-lg border-2 border-blue-200 bg-blue-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 outline-none"
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="mb-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-lg font-bold text-white shadow-md transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={handleLogin}
        >
          Login
        </button>
        <a href="#" className="mt-2 text-center text-sm text-blue-500 hover:underline">Forgot password?</a>
      </div>
    </div>
  );
}

export default Login;

