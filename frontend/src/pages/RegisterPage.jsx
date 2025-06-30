import Register from '../components/Register';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function RegisterPage() {
  // Enhanced: More attractive, animated, and modern look, consistent with LoginPage
  return (
    <div className="flex h-screen animate-fade-in bg-gray-100">
      {/* Left Side: Register Form */}
      <div className="flex w-full flex-col items-center justify-center p-10 md:w-1/2">
        <Register />
        <div className="mt-8 text-center">
          <span className="text-gray-500">Already have an account?</span>
          <Link to="/login" className="ml-2 font-semibold text-purple-600 transition-colors duration-200 hover:underline">Sign In</Link>
        </div>
      </div>

      {/* Right Side: Branding */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center gap-8 overflow-hidden bg-gradient-to-br from-purple-200 to-blue-200 p-12 md:flex">
        <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-white/20 animate-bounce-slow"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-white/20 animate-bounce-slow2"></div>
        <FaBook className="z-10 mb-4 h-20 w-20 text-purple-600 drop-shadow-xl" />
        <h1 className="z-10 animate-slide-in text-5xl font-extrabold tracking-tight text-gray-800 drop-shadow-lg">Join <span className="text-purple-600">Learn Mode</span></h1>
        <p className="z-10 max-w-md animate-fade-in text-center text-xl font-medium text-gray-700 delay-200">Create your account and start your personalized learning journey today!</p>
      </div>
    </div>
  );
}

export default RegisterPage;
