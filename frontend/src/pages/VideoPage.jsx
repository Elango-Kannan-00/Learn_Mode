import { useSearchParams } from 'react-router-dom';
import VideoSection from '../components/VideoSection';
import VideoSideBar from '../components/VideoSideBar';

function VideoPage(){
   const [searchParams] = useSearchParams();

   const courseName = searchParams.get('name');
   console.log(courseName);
    const videoId = searchParams.get('id');
    console.log(videoId);
  const content = [{
  id:1,
  title:"Video Section", 
  src:"https://www.youtube.com/embed/kUMe1FH4CHE?si=HsWGhdUik3fEAxWm",
},
 { 
  id:2,
  title:"Video Section",
  src:"https://www.youtube.com/embed/OXGznpKZ_sA?si=6ya2XZ8tfTn-4n7r",
  },
    { 
      id:3,
      title:"Video Section",
      src:"https://www.youtube.com/embed/Zi-Q0t4gMC8?si=lToky4tDR_OwnROR",
    }]


  const currentVideo = content.find(video => video.id === parseInt(videoId));

   return(
  <>
  <div className="flex flex-col md:flex-row w-full min-h-screen">
    <div className="w-full md:w-1/4 p-4 bg-gray-50 md:border-r border-gray-200">
      <VideoSideBar />
    </div>
    <div className="w-full  p-4 bg-white">
          {currentVideo && <VideoSection key={currentVideo.id} src={currentVideo.src}/>}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Course Details</h1>
        <h2 className="text-xl font-semibold mb-2">{courseName}</h2>
        <p className="text-gray-700">
          This course covers the fundamentals of {courseName}. You will learn about the key concepts and practical applications.
        </p>
      </div>  
    </div>
  </div>
</>
   )
}
 
export default VideoPage;
