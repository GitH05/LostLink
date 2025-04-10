import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import axiosInstance from '../utils/axios';
import NothingPost from './NothingPost';
import Spinner from './Spinner';

const PostItem = () => {

  const [items,setitems]=useState([])
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  
  const [searchTimeout, setSearchTimeout] = useState(null);
  useEffect(() => {
       const getitems = async() => {
         try {
           const { data } = await axiosInstance.get('/item/getallitem');
           setitems([...data.items].reverse());
           setLoading(false);
         } catch (error) {
           console.log(error);
         }
       };
       getitems();
    }, []);

  

  const handleSearch = async (e) => {
    e.preventDefault()
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    if (searchText.trimStart() !=='') {
      
      setSearchTimeout(
        setTimeout(async () => {
          const { data } = await axiosInstance.get(
            `/item/search/${searchText.trimStart()}`,
          );
          
          setitems(data.reverse());
          
        }, 800),
      );
    }
    
    
  };
  if (loading) {
    return <Spinner/>;
   }
  return (
    <>
    <section id="search">
            <h2>Search for Items</h2>
            <div className="search-container">
              <input type="text" id="search-input" placeholder='Search for items....' 
              onChange={(e) => handleSearch(e)}
            value={searchText}/>
           
            </div>
           <h1 style={{textAlign:'center',fontSize:'22px',fontWeight:'bolder'}}>Lost And Found Post</h1>
            
     </section>
     {items.length>0?(<div style={{display:"grid",gridTemplateColumns:"auto auto auto auto ",marginBottom:'40px'}}>{items.map((item,index)=><CardItem  item={item} key={index}/>)}
      
     </div>):(<NothingPost/>)}
     </>
  )
}

export default PostItem
