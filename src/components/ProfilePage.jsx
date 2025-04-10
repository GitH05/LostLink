
import { useAuth } from '../hooks'
import './ProfilePage.css'
import React, { useEffect, useState } from 'react';
import { Tabs, Flex } from 'antd';
import Login from './Login'
import UserDetail from './UserDetail';

import axiosInstance from '../utils/axios';
import Spinner from './Spinner';
import CardItem from './CardItem';
import NothingPost from './NothingPost';
const ProfilePage = () => {
   const {user}=useAuth()
   const [loading, setLoading] = useState(false);
   const [currentTab, setCurrecntTab] = useState("1")
   const [items,setitems]=useState([])
   useEffect(()=>{if(currentTab==='2') {
    setLoading(true)
    const getitems = async() => {
      try {
        const { data } = await axiosInstance.get(`/item/getuseritem/${user._id}`);
        
        setitems([...data.items].reverse());
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getitems();
 }},[currentTab])
 
if (loading) {
 return <Spinner/>;
}
  const tabs = [
      {
          key: "1",
          label: "Profile",
          children: <UserDetail user={user} forProp={"profile"}/>
      },
      {
          key:"2",
          label: "Post",
          children: <Flex wrap gap={5} justify='space-around'>
            {items.length !==0?(items.map((item,index)=>{return <CardItem item={item} key={index}/>})):<NothingPost/>}
          
      </Flex>
      }
  ]


  return (
    
      <div className='ant-tab-parent'>
           { user?(<Tabs
                style={{ display: "flex", justifyContent: "space-around" }}
                defaultActiveKey={currentTab}
                onChange={(key) => {
                    setCurrecntTab(key)
                }}
                items={tabs}
                type='card'
            />):(<Login/>)}
            
        </div>
      
  )
}



export default ProfilePage
