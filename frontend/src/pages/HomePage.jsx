import Navbar from '../components/Navbar'; 
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

function HomePage() { 
   return (
      <div className="grid grid-cols-[20%_80%] w-full h-screen">
        <Navbar />
        <div className="p-4 text-gray-800">
         <div className="max-w-4xl m-auto flex justify-center">
                 <SearchBar />
         </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Web Development" description="Explore our courses and learn new skills." />
        <Card title="Computer Networks" description="Stay updated with the latest news and articles." />
        <Card title="DataBase" description="Get in touch with us for any inquiries or support." /> 
         </div>
        </div>
      </div>
   );
}

export default HomePage;

