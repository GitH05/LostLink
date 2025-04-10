import React from 'react';
import { Descriptions } from 'antd';
import ButtonsControl from './ButtonsControl';


const UserDetail = ({ user, forProp }) => {
    
    const users = [
        {
            key: '1',
            label: 'Username',
            children: `${user.username}`,
            span: 2,
        },
        {
            key: '2',
            label: "Email",
            children: user.email,
            span: 2,
        },
        {
            key: '3',
            label: 'Address',
            children: user.address,
            span: 3,
        },
        {
            key: '4',
            label: 'Contact',
            children: `${user.contact}`,
            span: 2,
        },
        {
            key: '5',
            label: 'College',
            children: user.college,
            span: 2,
        },
        {
            key: '6',
            label: 'Course',
            children: user.course,
            span: 2,
        },
        
       
        {
            key: '7',
            label: 'Enrollment',
            children: user.enrollment,
            span: 2,
        },
    ];

    return (
        <Descriptions
            title={forProp === "profile"? "My Profile": "Item Description"}
            bordered
            items={users}
            extra={forProp === "profile"?<ButtonsControl/>:""}
            />
    )
}
export default UserDetail;

