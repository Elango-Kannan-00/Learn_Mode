import { FaSearch } from 'react-icons/fa';


function SearchBar(){ 
   return ( 
       <>
            <div className="border border-gray-300 rounded-lg p-2 flex items-center justify-between mb-4 w-full max-w-md shadow-sm hover:shadow-md transition-shadow duration-200">
                <input type="text" placeholder="Search..." className="w-full mt-1 mb-1 px-2 outline-none" />
                <button type="submit">
                    <FaSearch className="text-gray-500 hover:text-gray-700 mx-2" />
                </button>
            </div>
       </>
   )
}


export default SearchBar;
