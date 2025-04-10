import React, { useState } from 'react'
import axiosInstance from '../utils/axios';

const SearchBar = ({setitems,setLoading}) => {
    const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
    const handleSearch = async (e) => {
        
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);
    
        if (searchText.trimStart() !=='') {
          setLoading(true);
          setSearchTimeout(
            setTimeout(async () => {
              const { data } = await axiosInstance.get(
                `/item/search/${searchText.trimStart()}`,
              );
              console.log(data)
              setitems(data.reverse());
              setLoading(false);
            }, 500),
          );
        }
        
      };
    
  return (
    
<section id="search">
            <h2>Search for Items</h2>
            <div className="search-container">
              <input type="text" id="search-input" placeholder='Search for items....' 
              onChange={(e) => handleSearch(e)}
            value={searchText}/>
            </div>
            <div className="item-grid" id="item-grid">
            </div>
     </section>
   
  )
}

export default SearchBar
