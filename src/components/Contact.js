import React, { useState } from "react";
import "../styles/contact.css";
import { getDatabase, ref, push, set } from "firebase/database";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function userDataHandler(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  async function submitHandler(e) {
    e.preventDefault();
    // Create a new post reference with an auto-generated id
    const database = getDatabase();
    const postListRef = ref(database, "contactData");
    const newPostRef = push(postListRef);
    set(newPostRef, {
      userData,
    });
  }

  return (
    <div className="contact">
      <form>
        <div className="mb-3 ">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-light"
          >
            Name
          </label>
          <input
            value={userData.name}
            onChange={userDataHandler}
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3 ">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-light"
          >
            Email address
          </label>
          <input
            value={userData.email}
            onChange={userDataHandler}
            name="email"
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label text-light"
          >
            Message
          </label>
          <textarea
            value={userData.message}
            onChange={userDataHandler}
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="form-submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
