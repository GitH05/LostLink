import { Button, Descriptions, Flex } from 'antd';
import React, { useEffect, useState } from 'react'
import {EditFilled} from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axios';
import Spinner from './Spinner';
import PopupItemEdit from './PopupItemEdit';
import { useAuth } from '../hooks';


const PostDetail = () => {
    const {id}=useParams()
    const {user}=useAuth()
    const [item,setitem]=useState(null)
  const [loading, setLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false)
  
  useEffect(() => {
       const getitems = async() => {
         try {
           const { data } = await axiosInstance.get(`item/singleitem/${id}`);
           setitem(data.item);
           setLoading(false);
         } catch (error) {
           console.log(error);
         }
       };
       getitems();
    }, [id]);
    
  if (loading) {
    return <Spinner/>;
  }

    const items = [
        {
            key: '1',
            label: 'Item Name',
            children: `${item.itemname}`,
            span: 2,
        },
        {
            key: '2',
            label: "Status",
            children: item.status,
            span: 2,
        },
        {
            key: '3',
            label: 'Description',
            children: `${item.description}`,
            span: 3,
        },
        {
            key: '4',
            label: 'Location',
            children: item.location,
            span: 2,
        },
        {
            key: '5',
            label: 'Contact',
            children: item.contact,
            span: 2,
        },
        {
            key: '6',
            label: 'Email',
            children: item.emailid,
            span: 3,
        },
        {
            key: '7',
            label: 'Photo',
            children:<div><a href={item.itemimage}><img style={{height:'300px',width:'300px'}} src={item.itemimage} alt='productdetail'></img></a> </div>,
            span: 3,
        },
        {
            key: '8',
            label: 'College',
            children: item.college,
            span: 2,
        },
        {
            key: '9',
            label: 'Enrollment',
            children: item.enrollment,
            span: 2,
        },
        {
            key: '10',
            label: 'Post Date',
            children: item.postdate.slice(0,10),
            span: 2,
        },
    ];

  return (
    <Descriptions
            title="Item Description"
            bordered
            items={items}
            extra={user._id===item.owner?(<Flex gap={"large"}>
            <Button
                type='primary'
                onClick={() => {
                    setOpenPopup(true);
                }}
                icon={<EditFilled />} 
                iconPosition={"start"}> Edit </Button>
            
            <PopupItemEdit
                visible={openPopup}
                item={item}
                setitem={setitem}
                onClose={() => {
                    setOpenPopup(false);
                }}
               
            />
        </Flex>):''}
            />
  )
}

export default PostDetail
