import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { data } from '../data';

function VideoSideBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get('name');

  const course = data.find(course => { 
    return course.name === courseName});

  if (!course) {
    return <div className="text-white">Course not found</div>;
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
        {course.courses.map((video)=>{ 
           return(
            <li key={video.id} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <Link to={`/videos?name=${course.name}&id=${video.id}`} className="text-gray-900 dark:text-white font-semibold hover:underline">{video.title}</Link>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{video.description}</p>
              </div>
            </li>
           )
        })} 
      </ul>
    </div>
  );
}

export default VideoSideBar;

