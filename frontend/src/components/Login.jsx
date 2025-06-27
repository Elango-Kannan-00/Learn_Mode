function Login() {
  return (
    <>
      <form className="flex flex-col max-w-md w-full mx-auto p-8 bg-white bg-opacity-80 rounded-2xl shadow-xl border border-blue-100 relative animate-fade-in">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-100 rounded-full p-3 shadow-md">
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600 tracking-tight">Sign In</h2>
        <div className="flex flex-col w-full mb-4">
          <label className="text-gray-600 font-semibold mb-2 ml-2" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 p-3 rounded-lg transition-all duration-200 outline-none bg-blue-50 placeholder-gray-400"
          />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label className="text-gray-600 font-semibold mb-2 ml-2" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="border-2 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 p-3 rounded-lg transition-all duration-200 outline-none bg-blue-50 placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 mb-2"
        >
          Login
        </button>
        <a href="#" className="text-blue-500 text-sm text-center hover:underline mt-2">Forgot password?</a>
      </form>
    </>
  );
}

export default Login;
