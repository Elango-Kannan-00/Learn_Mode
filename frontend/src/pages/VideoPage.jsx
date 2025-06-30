import { useSearchParams } from 'react-router-dom';
import VideoSection from '../components/VideoSection';
import VideoSideBar from '../components/VideoSideBar';
import CourseIntroduction from '../components/CourseIntroduction';
import { data } from '../data';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function VideoPage() {
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get('name') || 'Course';
  const videoId = searchParams.get('id');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const course = data.find(course => course.name === courseName);
  const currentVideo = course?.courses?.find(video => video.id === parseInt(videoId));
  const courseIntroduction = course?.introduction || "Welcome to the course!";

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar for larger screens */}
      <div className="hidden lg:block lg:w-[22%] lg:flex-shrink-0 fixed top-0 left-0 h-full z-10">
        <VideoSideBar />
      </div>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="relative h-full w-64 bg-white p-4 shadow-lg dark:bg-gray-900">
          <VideoSideBar />
        </div>
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsSidebarOpen(false)}></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:ml-[22%] md:pt-16">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-md dark:bg-gray-900/70 mb-4">
              <button
                className="text-gray-700 dark:text-gray-300 lg:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <FaBars className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                {courseName}
              </h1>
            </div>
            {currentVideo ? (
              <VideoSection key={currentVideo.id} src={currentVideo.src} courseName={courseName} />
            ) : (
              <CourseIntroduction introduction={courseIntroduction} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default VideoPage;

