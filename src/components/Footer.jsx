import React from "react";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div
      className="footer-container bg-dark "
      style={{
        border: "1px solid black",
      }}
    >
      <footer className="py-3 my-4  ">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <a
              href="https://www.amazon.com"
              className="nav-link px-2 text-muted"
              target="_blank"
            >
              <AiFillAmazonCircle></AiFillAmazonCircle>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.google.com"
              className="nav-link px-2 text-muted"
              target="_blank"
            >
              <AiFillGoogleCircle></AiFillGoogleCircle>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.instagram.com/"
              className="nav-link px-2 text-muted"
              target="_blank"
            >
              <AiFillInstagram></AiFillInstagram>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.youtube.com/"
              className="nav-link px-2 text-muted"
              target="_blank"
            >
              <AiFillYoutube></AiFillYoutube>
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2023 Company, Tech Services</p>
      </footer>
    </div>
  );
};

export default Footer;
