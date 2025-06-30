import { useSearchParams } from 'react-router-dom';
import VideoSection from '../components/VideoSection';
import VideoSideBar from '../components/VideoSideBar';
import CourseIntroduction from '../components/CourseIntroduction';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

async function fetchVideoData(courseName, id) {
  try {
    const response = await fetch(`http://localhost:3000/api/video/getvideo/${courseName}/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch video data');
    return data;
  } catch (error) {
    console.error("Error fetching video data:", error);
    throw error; // Rethrow to handle in component
  }
}

function VideoPage() {
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get('name') || 'Course';
  const videoId = searchParams.get('id');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setIsLoading(true);
      setError(null);
      try {
        const videoData = await fetchVideoData(courseName, videoId);
        // Assuming videoData is the single video object
        if (isMounted) setData(videoData);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, [courseName, videoId]);

  const courseIntroduction = "Welcome to the course!";

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar for larger screens */}
      <div className="hidden lg:block lg:w-[22%] lg:flex-shrink-0 fixed top-0 left-0 h-full z-10">
        <VideoSideBar />
      </div>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="relative h-full w-64 bg-white p-4 shadow-lg dark:bg-gray-900">
          <VideoSideBar />
        </div>
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:ml-[22%] md:pt-16">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-md dark:bg-gray-900/70 mb-4">
              <button
                className="text-gray-700 dark:text-gray-300 lg:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <FaBars className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                {courseName}
              </h1>
            </div>
            {isLoading ? (
              <div className="text-center py-8">Loading...</div>
            ) : error ? (
              <div className="text-red-500 text-center py-8">{error}</div>
            ) : data ? (
              <VideoSection key={data.id} src={data.src} courseName={courseName} />
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

