import { useSearchParams } from 'react-router-dom';

function VideoPage(){
   const [searchParams] = useSearchParams();

   const courseName = searchParams.get('name');
   console.log(courseName);

    if (!courseName) {
        return (
            <div className="flex flex-col items-center justify-items-normal h-full">
                <h1 className="text-2xl font-bold mb-4 pt-4">Video Page</h1>
                <p className="text-lg mb-4">No course selected.</p>
            </div>
        );
    }
   return(
    <>
      <div className="flex flex-col items-center justify-items-normal h-full">
        <h1 className="text-2xl font-bold mb-4 pt-4">Video Page</h1>
        <p className="text-lg mb-4">This is the video page for a specific course.</p>
        <p className="text-md">You can add your video player component here.</p>
        <p className="text-md mt-2">Course Name: {courseName}</p>
      </div>
    </>
   )
}
 
export default VideoPage;
