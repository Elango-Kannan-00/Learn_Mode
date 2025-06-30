import Login from '../components/Login';
import { FaBook } from 'react-icons/fa';

function LoginPage() {
  // Enhanced: More attractive, animated, and modern look
  return (
    <div className="flex h-screen animate-fade-in bg-gray-100">
      {/* Left Side: Branding */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center gap-8 overflow-hidden bg-gradient-to-bl from-blue-200 to-purple-200 p-12 md:flex">
        <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-white/20 animate-bounce-slow"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-white/20 animate-bounce-slow2"></div>
        <FaBook className="z-10 mb-4 h-20 w-20 text-blue-600 drop-shadow-xl" />
        <h1 className="z-10 animate-slide-in text-5xl font-extrabold tracking-tight text-gray-800 drop-shadow-lg">Welcome to <span className="text-blue-600">Learn Mode</span></h1>
        <p className="z-10 max-w-md animate-fade-in text-center text-xl font-medium text-gray-700 delay-200">Your personalized learning platform.<br/>Sign in to continue your journey!</p>
      </div>
      {/* Right Side: Login Form */}
      <div className="flex w-full flex-col items-center justify-center p-10 md:w-1/2">
        <Login />
        <div className="mt-8 text-center">
          <span className="text-gray-500">Don't have an account?</span>
          <a href="/register" className="ml-2 font-semibold text-blue-600 transition-colors duration-200 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
