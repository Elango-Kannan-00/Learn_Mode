function Popup() {
  return (
    // Overlay background
    <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New Course</h2>
        <input
          type="text"
          placeholder="Course Name"
          className="border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Course Description"
          className="border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;

