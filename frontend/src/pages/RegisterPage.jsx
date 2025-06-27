
import Register from '../components/Register';
import { FaBook } from 'react-icons/fa';

function RegisterPage() {
  // Register page with form on the left, branding on the right
  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-100 to-blue-100 animate-fade-in">
      {/* Left Side: Register Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white bg-opacity-95 rounded-l-3xl shadow-2xl p-10 relative animate-fade-in delay-100">
        {/* Glassmorphism effect */}
        <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md rounded-l-3xl -z-10" />
        <Register />
        <div className="mt-8 text-center">
          <span className="text-gray-500">Already have an account?</span>
          <a href="#" className="text-purple-600 font-semibold ml-2 hover:underline transition-colors duration-200">Sign In</a>
        </div>
      </div>
      {/* Right Side: Branding */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 gap-8 bg-gradient-to-bl from-blue-100 to-blue-300 bg-opacity-90 rounded-r-3xl shadow-2xl p-12 relative overflow-hidden">
        <FaBook className="w-20 h-20 text-purple-500 mb-4 drop-shadow-xl z-10" />
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6 drop-shadow-lg tracking-tight animate-slide-in z-10">Join <span className="text-purple-600">MyApp</span></h1>
        <p className="text-xl text-gray-700 text-center max-w-md font-medium animate-fade-in delay-200 z-10">Create your account and start your personalized learning journey today!</p>
      </div>
    </div>
  );
}

export default RegisterPage;
