import SideBarCourse from '../components/SideBarCourse'; 
import Card from '../components/Card';
import Popup from '../components/Popup';

// TODO: Setting state and handling the popup visibility remains to be implemented.
function handlePopup() { 
  console.log("Popup opened");
  return false;
}

function CoursePage() {
   return (
    <> 
      <div className="grid grid-cols-[23%_75%] h-screen">
        <SideBarCourse title="Course Content" />
        <div className="flex-1 p-4 w-full border-l  border-gray-200">
          <div className="max-w-4xl flex flex-row justify-between m-auto">
            <h2 className="text-2xl font-bold mb-2 mt-2">Courses</h2>
            <button className="mt-1 mb-1 px-4 py-1 bg-blue-500 text-white rounded-full  hover:bg-blue-600" onClick={handlePopup}>
              Add Course
            </button>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Card title="Course Title" description="This is a brief description of the course." />
            <Card title="Module 1" description="Introduction to the course and its objectives." />
            <Card title="Module 2" description="Deep dive into the first topic of the course." />
           </div>
           {handlePopup() && <Popup />}
        </div>
      </div>
    </>
   )
}

export default CoursePage;
