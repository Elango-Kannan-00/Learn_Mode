function Popup({onClose}) {
  return (
    // Overlay background
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 ">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-scale-in-content dark:bg-gray-900">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white">Add New Course</h2>
        <input
          type="text"
          placeholder="Course Name"
          className="w-full mb-4 rounded-lg border border-gray-300 p-3 transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Course Description"
          className="w-full mb-6 rounded-lg border border-gray-300 p-3 transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-400"
        />
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="rounded-lg px-6 py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700">Cancel</button>
          <button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;

