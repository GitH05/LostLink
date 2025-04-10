import React, { useState } from "react";
import axiosInstance from "../utils/axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import "./FoundItemForm.css";
const FoundItemForm = () => {
  const { user } = useAuth();
  const [redirect, setredirect] = useState(false);

  const [formData, setformData] = useState({
    user: "",
    itemname: "",
    description: "",
    location: "",
    status: "",
    date: "",
    college: "",
    emailid: "",
    contact: "",
    enrollment: "",
  });

  const {
    itemname,
    description,
    location,
    date,
    college,
    emailid,
    contact,
    enrollment,
  } = formData;
  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const data = new FormData();
      data.append("photos", event.target.files[0]);

      const res = await axiosInstance.post("/upload", data);

      setformData({
        ...formData,
        itemimage: res.data,
        status: "found",
        user: user._id,
      });
    }
  };
  const handelchange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiosInstance.post("/item/additem", formData);

      if (data.item) {
        toast.success("successfully add found item");
        setredirect(true);
        return;
      }
      toast.error("unsuccessfully add found item");
    } catch (error) {
      toast.error("unsuccessfully add found item");
    }
  };
  if (redirect) {
    return <Navigate to={"/post"} />;
  }
  return (
    <section id="upload-found">
      <h2>Upload a Found Item</h2>
      <form id="itemform" onSubmit={handelSubmit}>
        <div className="inputWithLabel">
          <label htmlFor="itemname">Item Name: </label>
          <input
            className="input"
            type="text"
            name="itemname"
            id="itemname"
            placeholder="Item Name"
            value={itemname}
            onChange={handelchange}
            required
          />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="description">Description: </label>
          <textarea
            className="input"
            name="description"
            id="description"
            placeholder="Detailed Description"
            value={description}
            onChange={handelchange}
            required
          ></textarea>
        </div>

        <div className="inputWithLabel">
          <label htmlFor="location">Location: </label>
          <input
            className="input"
            type="text"
            name="location"
            id="location"
            placeholder="Found Location"
            value={location}
            onChange={handelchange}
            required
          />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="date">Found Date: </label>
          <input
            className="dateinput"
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handelchange}
            required
          />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="location">Upload Pictures: </label>
          <input
            className="inputfile"
            type="file"
            id="file"
            accept="image/*"
            onChange={onImageChange}
            required
          />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="college">Your College: </label>
          <input
            className="input"
            type="text"
            name="college"
            id="college"
            placeholder="Your College [PIET | PIT | PIBA | PID | PIAR | PIA | PIN]"
            value={college}
            onChange={handelchange}
          />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="emailid">Email: </label>
          <input
            className="input"
            type="email"
            name="emailid"
            id="emailid"
            placeholder="Your Email"
            value={emailid}
            onChange={handelchange}
            required
          />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="contact">Contact: </label>
          <input
            className="input"
            type="number"
            name="contact"
            id="contact"
            placeholder="Phone Number"
            value={contact}
            onChange={handelchange}
            required
          />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="enrollment">Enrollment: </label>
          <input
            className="input"
            type="number"
            name="enrollment"
            id="enrollment"
            placeholder="Enrollment Number"
            value={enrollment}
            onChange={handelchange}
            required
          />
        </div>

        <button className="submitbutton" type="submit" value="UploadItem">
          Submit
        </button>
      </form>
    </section>
  );
};

export default FoundItemForm;
