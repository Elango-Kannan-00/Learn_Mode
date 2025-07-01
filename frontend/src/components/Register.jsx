import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const registerData = async (e) => {
    e.preventDefault();
    setError(null);
    if (!formState.username || !formState.email || !formState.password) {
      setError("All fields are required");
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formState.username,
          email: formState.email,
          password: formState.password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful", data);
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed");
      }
    } catch (error) {
      setError("Error during registration: " + error.message);
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-fit rounded-full bg-purple-100 p-3 shadow-md z-10">
        <svg className="h-10 w-10 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <div className="flex w-full flex-col rounded-2xl border border-purple-200 bg-white/80 p-8 pt-12 shadow-xl backdrop-blur-sm animate-fade-in">
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-purple-600">Sign Up</h2>
        {error && (
          <div className="mb-4 text-red-500 text-center">
            {error}
          </div>
        )}
        <div className="mb-4 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600" htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Choose a username"
            className="rounded-lg border-2 border-purple-200 bg-purple-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200/50 outline-none"
            value={formState.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="rounded-lg border-2 border-purple-200 bg-purple-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200/50 outline-none"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600" htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            className="rounded-lg border-2 border-purple-200 bg-purple-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200/50 outline-none"
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={registerData}
          className="mb-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 py-3 text-lg font-bold text-white shadow-md transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;

