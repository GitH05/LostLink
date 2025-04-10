import { Form, Input, Modal, Flex, Button, Upload} from "antd";
import React, { useState } from 'react'
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { UploadOutlined } from '@ant-design/icons';
import axiosInstance from "../utils/axios";
import { Navigate } from "react-router-dom";

function PopupItemEdit({ visible, onClose,item,setitem}) {
    const [redirect, setredirect] = useState(false);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(item.itemimage );
    const [itemData,setitemData]= useState({
    itemname:item.itemname,
    description:item.description,
    location:item.location,
    date:item.date,
    college:item.college,
    emailid:item.emailid,
    contact:item.contact,
    enrollment:item.enrollment,
    itemimage:item.itemimage,
       
      });
      const handleImageChange = async({ file }) => {
        if (file && file.type.startsWith('image/')) {
            const data = new FormData();
            data.append("photos",file);
      
            const res = await axiosInstance.post("/upload", data);
            setImageUrl(res.data);
           
            setitemData({
              ...itemData,
              itemimage: imageUrl,
              
            });
            
            form.setFieldsValue({ image: imageUrl });
        } else {
            console.error('The selected file is not an image.');
        }
    };
     
    const handleSubmit = async(itemData) => {
        setLoading(true);
        const { itemname,
            description,
            location,
            
            college,
            emailid,
            contact,
            enrollment,
            
            } = itemData;
            
        try {
        if (itemname.trim() === '') {
            setLoading(false);
            return toast.error("itemname Can't be empty");
          }
          
          else if (contact.trim() === '') {
            setLoading(false);
            return toast.error("contact Can't be empty");
          }
          else if (description.trim() === '') {
            setLoading(false);
            return toast.error("description Can't be empty");
          }
          else if (college.trim() === '') {
            setLoading(false);
            return toast.error("college Can't be empty");
          }
          else if (location.trim() === '') {
            setLoading(false);
            return toast.error("location Can't be empty");
          }
          
          else if (enrollment.length<=0) {
            setLoading(false);
            return toast.error("enrollment Can't be empty");
          } 
          
          else if (emailid.trim() === '') {
            setLoading(false);
            return toast.error("emailid Can't be empty");
          } 
          
          
          const itemDetails = {
            
            itemname:itemData.itemname,
            description:itemData.description,
            location:itemData.location,
            date:item.date,
            college:itemData.college,
            emailid:itemData.emailid,
            contact:itemData.contact,
            enrollment:itemData.enrollment,
            itemimage:imageUrl,
          };
    
          const {data} = await axiosInstance.post(`/item/updateitem/${item._id}`,itemDetails)
          
          if (data.item) {
            setitem(data.item)
            
            setLoading(false);
            setredirect(true)
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
      if (redirect) {
        return <Navigate to={`/postdetail/${item._id}`} />;
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
                initialValues={itemData}
            >
                <Form.Item
                    name="itemname"
                    label="Item Name"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please input the Item name!" },
                    ]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>

                <Form.Item
                    name="location"
                    label="Location"
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
                    name="description"
                    label="Description"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please Enter description for clear identification!!" },
                    ]}
                >
                    <Input.TextArea style={{ width: 400 }} />
                </Form.Item>

                <Form.Item
                    name="itemimage"
                    label="Image"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please upload an Image!" },
                    ]}
                >
                    <div style={{display: "flex", flexDirection:"column"}}>
                    <Upload
                        listType="picture"
                        beforeUpload={() => false}
                        onChange={handleImageChange}
                        showUploadList={false}
                    >
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Selected"
                            style={{ width: "50%", marginTop: '12px' }}
                        />
                    )}
                    </div>
                </Form.Item>


                <Form.Item
                    name="emailid"
                    label="EmailId"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please enter your emailid!" },
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

export default PopupItemEdit;
