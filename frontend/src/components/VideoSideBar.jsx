import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

async function fetchVideoData(courseName) {
  try {
    const response = await fetch(`http://localhost:3000/api/video/getvideo/${courseName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch video data');
    }
    console.log("Fetched video data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching video data:", error);
    return [];
  }
}

function VideoSideBar() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get('name');

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const videoData = await fetchVideoData(courseName);
      setData(videoData);
      setIsLoading(false);
    }
    loadData();
  }, [courseName]);

  if (isLoading) {
    return <div className="text-gray-800 dark:text-white p-4">Loading videos...</div>;
  }

  if (data.length === 0) {
    return <div className="text-gray-800 dark:text-white p-4">No videos found for this course.</div>;
  }

  return (
    <div className="flex h-full flex-col p-4 bg-gray-50 dark:bg-gray-900 md:pt-20">
      <div className="mb-4 flex items-center border-b border-gray-200 pb-4 dark:border-gray-700">
        <button
          className="mr-4 rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => {
            navigate("/courses", { replace: true });
          }}
        >
          <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <h1 className="truncate text-xl font-bold text-gray-800 dark:text-white">{courseName}</h1>
      </div>
      <ul className="w-full list-none space-y-2 p-0 m-0">
        {data.map((video) => (
          <li key={video.videoId} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              {/* Use courseName or video.topic as needed */}
              <Link
                to={`/videos?name=${courseName}&id=${video.videoId}`}
                className="text-gray-900 dark:text-white font-semibold hover:underline"
              >
                {video.title}
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{video.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoSideBar;

