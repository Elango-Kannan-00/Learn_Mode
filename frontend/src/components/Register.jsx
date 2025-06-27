function Register() {
  return (
    <>
      <form className="flex flex-col max-w-md w-full mx-auto p-8 bg-white bg-opacity-80 rounded-2xl shadow-xl border border-purple-200 relative animate-fade-in">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-100 rounded-full p-3 shadow-md">
          <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
        <h2 className="text-3xl font-extrabold mb-6 text-center text-purple-600 tracking-tight">Sign Up</h2>
        <div className="flex flex-col w-full mb-4">
          <label className="text-gray-600 font-semibold mb-2 ml-2" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Choose a username"
            className="border-2 border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 p-3 rounded-lg transition-all duration-200 outline-none bg-purple-50 placeholder-gray-400"
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label className="text-gray-600 font-semibold mb-2 ml-2" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="border-2 border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 p-3 rounded-lg transition-all duration-200 outline-none bg-purple-50 placeholder-gray-400"
          />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label className="text-gray-600 font-semibold mb-2 ml-2" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className="border-2 border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 p-3 rounded-lg transition-all duration-200 outline-none bg-purple-50 placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-bold text-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-200 mb-2"
        >
          Register
        </button>
        <a href="#" className="text-purple-500 text-sm text-center hover:underline mt-2">Already have an account?</a>
      </form>
    </>
  );
}

export default Register;
