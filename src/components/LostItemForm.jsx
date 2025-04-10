import React, { useState } from "react";
import axiosInstance from "../utils/axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

const LostItemForm = () => {
  const { user } = useAuth();
  const [redirect, setredirect] = useState(false);
  const [formData, setformData] = useState({
    user: "",
    itemname: "",
    description: "",
    location: "",
    status: "",
    date: "",
    itemimage: "",
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
        status: "lost",
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
        toast.success("successfully add item");
        setredirect(true);
        return;
      }
      toast.error("unsuccessfully add lost item");
    } catch (error) {
      toast.error("unsuccessfull add lost item");
    }
  };
  if (redirect) {
    return <Navigate to={"/post"} />;
  }
  return (
    <section id="report-lost">
      <h2>Report a Lost Item</h2>
      <form id="itemform">
        <div className="inputWithLabel">
          <label htmlFor="lost-itemname">Item Name: </label>
          <input
            className="input"
            type="text"
            name="itemname"
            id="lost-itemname"
            placeholder="Item Name"
            value={itemname}
            onChange={handelchange}
            required
          />
        </div>
        <div className="inputWithLabel">
          <label htmlFor="lost-description">Description: </label>
          <textarea
            className="input"
            name="description"
            id="lost-description"
            placeholder="Detailed Description"
            value={description}
            onChange={handelchange}
            required
          ></textarea>
        </div>
        <div className="inputWithLabel">
          <label htmlFor="lost-location">Location: </label>
          <input
            className="input"
            type="text"
            name="location"
            id="lost-location"
            placeholder="Last Seen Location"
            value={location}
            onChange={handelchange}
            required
          />
        </div>
        <div className="inputWithLabel">
          <label htmlFor="lost-date">Lost Date: </label>
          <input
            className="dateinput"
            type="date"
            name="date"
            id="lost-date"
            value={date}
            onChange={handelchange}
            required
          />
        </div>
        <div className="inputWithLabel">
          <label htmlFor="lost-file">Upload Pictures: </label>
          <input
            className="inputfile"
            type="file"
            id="lost-file"
            accept="image/*"
            onChange={onImageChange}
            required
          />
        </div>
        <div className="inputWithLabel">
          <label htmlFor="lost-college">Your College: </label>
          <input
            className="input"
            type="text"
            name="college"
            id="lost-college"
            placeholder="Your College"
            value={college}
            onChange={handelchange}
          />
        </div>
        <div className="inputWithLabel">
          <label htmlFor="lost-emailid">Email: </label>
          <input
            className="input"
            type="email"
            name="emailid"
            id="lost-emailid"
            placeholder="Your Email"
            value={emailid}
            onChange={handelchange}
            required
          />
        </div>
        <div className="inputWithLabel">
          <label htmlFor="lost-contact">Contact: </label>
          <input
            className="input"
            type="number"
            name="contact"
            id="lost-contact"
            placeholder="Phone Number"
            value={contact}
            onChange={handelchange}
            required
          />
        </div>
        <div className="inputWithLabel">
          <label htmlFor="lost-enrollment">Enrollment: </label>
          <input
            className="input"
            type="number"
            name="enrollment"
            id="lost-enrollment"
            placeholder="Enrollment Number"
            value={enrollment}
            onChange={handelchange}
            required
          />
        </div>
        <button
          className="submitbutton"
          type="submit"
          value="UploadItem"
          onClick={handelSubmit}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default LostItemForm;
