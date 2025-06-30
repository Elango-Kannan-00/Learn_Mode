import { FaInfoCircle } from 'react-icons/fa';

function CourseIntroduction({ courseName }) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-gray-800/50">
      <FaInfoCircle className="mb-6 h-20 w-20 text-blue-500 dark:text-blue-400" />
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Welcome to the {courseName} Course!
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
        This course provides a comprehensive overview of {courseName}. You'll learn the fundamental concepts and gain hands-on experience.
      </p>
      <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
        Please select a topic from the sidebar to begin your learning journey.
      </p>
    </div>
  );
}

export default CourseIntroduction;
