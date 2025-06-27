
import Login from '../components/Login';
import { FaBook } from 'react-icons/fa';

function LoginPage() {
  // Enhanced: More attractive, animated, and modern look
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-100 to-purple-100 animate-fade-in">
      {/* Left Side: Branding */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 gap-8 bg-gradient-to-bl from-teal-100 to-teal-300 bg-opacity-90 rounded-l-3xl shadow-2xl p-12 relative overflow-hidden">
        <FaBook className="w-20 h-20 text-blue-500 mb-4 drop-shadow-xl z-10" />
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6 drop-shadow-lg tracking-tight animate-slide-in z-10">Welcome to <span className="text-blue-600">MyApp</span></h1>
        <p className="text-xl text-gray-700 text-center max-w-md font-medium animate-fade-in delay-200 z-10">Your personalized learning platform.<br/>Sign in to continue your journey!</p>
      </div>
      {/* Right Side: Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white bg-opacity-95 rounded-r-3xl shadow-2xl p-10 relative animate-fade-in delay-100">
        {/* Glassmorphism effect */}
        <div className="absolute bg-white bg-opacity-40 backdrop-blur-md rounded-r-3xl -z-10" />
        <Login />
        <div className="mt-8 text-center">
          <span className="text-gray-500">Don't have an account?</span>
          <a href="#" className="text-blue-600 font-semibold ml-2 hover:underline transition-colors duration-200">Sign Up</a>
        </div>
      </div>
      {/* Custom Animations */}
      <style>{`
        
      `}</style>
    </div>
  );
}

export default LoginPage;
