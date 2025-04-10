import { Form, Input, Modal, Flex, Button} from "antd";
import React, { useState } from 'react'
import { toast } from "react-toastify";
import { useAuth } from "../hooks";
import Spinner from "./Spinner";

function Popup({ visible, onClose}) {
    const {user,setUser,updateUser}=useAuth()
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const userData= {
        username:user.username,
       
        contact:user.contact,
        address:user.address,
        college:user.college,
        course:user.course,
        enrollment:user.enrollment,
       
      };
     
    const handleSubmit = async(userData) => {
        setLoading(true);
        const {  username,
            
            contact,
            address,
            college,
            course,
            enrollment,
            } = userData;
           
        try {
        if (username.trim() === '') {
            setLoading(false);
            return toast.error("username Can't be empty");
          }
          
          else if (contact.trim() === '') {
            setLoading(false);
            return toast.error("contact Can't be empty");
          }
          else if (address.trim() === '') {
            setLoading(false);
            return toast.error("address Can't be empty");
          }
          else if (college.trim() === '') {
            setLoading(false);
            return toast.error("college Can't be empty");
          }
          else if (course.trim() === '') {
            setLoading(false);
            return toast.error("course Can't be empty");
          }
          
          else if (enrollment.trim() === '') {
            setLoading(false);
            return toast.error("enrollment Can't be empty");
          } 
          
          const userDetails = {
        username:userData.username,
       
        contact:userData.contact,
        address:userData.address,
        college:userData.college,
        course:userData.course,
        enrollment:userData.enrollment,
       
            
          };
    
          const res = await updateUser(userDetails);
          if (res.success) {
            setUser(res.updatedUser);
            setLoading(false);
            onClose()
            return toast.success('Updated successfully!');
          }
          setLoading(false);
          
        } catch (error) {
          
          toast.error('Something went wrong!');
          setLoading(false);
        }
      };
    
   
      if (loading) {
        return <Spinner/>;
      }

    return (
        <Modal
            title="Update Product"
            open={visible}
            style={{ top: 0 }}
            width={"445px"}
            onCancel={onClose}
            footer={
                <Flex justify="space-around">
                    <Button key="cancel" onClick={onClose} variant="outlined">
                        Cancel
                    </Button>
                    <Button
                        key="submit"
                        type="primary"
                        variant="contained"
                        onClick={() => form.submit()}
                    >
                        Submit
                    </Button>
                </Flex>
            }
        >
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
                initialValues={userData}
            >
                <Form.Item
                    name="username"
                    label="Name"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please input the Item name!" },
                    ]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Address"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please Enter address for clear identification!!" },
                    ]}
                >
                    <Input.TextArea style={{ width: 400 }} />
                </Form.Item>

                <Form.Item
                    name="college"
                    label="College"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please input your College " },
                    ]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>

                <Form.Item
                    name="contact"
                    label="Contact"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please enter your Contact Number !" },
                    ]}
                >
                    <Input style={{ width: 400 }} type="tel" />
                </Form.Item>

                

                <Form.Item
                    name="course"
                    label="Course"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please enter your course!" },
                    ]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>

                <Form.Item
                    name="enrollment"
                    label="Enrollment"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please enter your Enrollment Number!" },
                    ]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>

                
            </Form>
        </Modal>
    );
}

export default Popup;
