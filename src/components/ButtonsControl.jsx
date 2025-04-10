import React, { useState } from 'react';
import { Button, Flex } from 'antd';
import Popup from './Popup';
import { Navigate } from 'react-router-dom'
import {EditFilled,LogoutOutlined} from '@ant-design/icons';
import { useAuth } from '../hooks';

function ButtonsControl() {
    const {logout}=useAuth()
const [redirect,setredirect]=useState(false)
const [openPopup, setOpenPopup] = useState(false)
    // const descript = {
    //     itemName: "Mobile",
    //     description: "a quick brown fox jumps over the lazy dog.",
    //     location: "Azad Bhawan A-421",
    //     contact: "1234567890",
    //     email: "random.mail@google.com",
    //     image: 'https://res.cloudinary.com/dcupcvynz/image/upload/v1724168994/mhaenwv5gy27wrglqdf2.jpg',
    //     college: "PIET",
    //     enrollment: "210303105603",
    //     status: "Lost"
    // }
    
    if (redirect) {
        return <Navigate to={'/'} />;
      } 
      
    return (
        <Flex gap={"large"}>
            <Button
                type='primary'
                onClick={() => {
                    setOpenPopup(true);
                }}
                icon={<EditFilled />} 
                iconPosition={"start"}> Edit </Button>
            <Button 
            danger 
            type='primary'
            icon={<LogoutOutlined />} 
            iconPosition={"start"}
            onClick={()=>{logout(); setredirect(true)}}> LogOut </Button>
            <Popup
                visible={openPopup}
                onClose={() => {
                    setOpenPopup(false);
                }}
               
            />
        </Flex>
    )
}

export default ButtonsControl