import { Link,useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function VideoSideBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get('name');

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-items-normal p-2 bg-gray-50 border-b border-gray-200">
      <button className="mx-4" onClick={()=>{ 
          navigate("/courses", { replace: true})
      }}>Back</button>
      <h1 className="text-2xl font-bold mb-4 pt-4 text-center">{courseName}</h1>
      </div>
      <ul className="list-none p-0 m-0 border-t border-gray-200 w-full">
        <li className="m-4 mb-2 text-center">
          <Link
            to={`/videos?name=${courseName}&id=1`}
            className="text-blue-500 hover:underline"
          >
            HTML
          </Link>
        </li>
        <li className="m-4 mb-2 text-center">
          <Link
            to={`/videos?name=${courseName}&id=2`}
            className="text-blue-500 hover:underline"
          >
            CSS
          </Link>
        </li>
        <li className="m-4 mb-2 text-center">
          <Link
            to={`/videos?name=${courseName}&id=3`}
            className="text-blue-500 hover:underline"
          >
            JavaScript
          </Link>
        </li>
      </ul>
    </div>
  );
}


export default VideoSideBar;
