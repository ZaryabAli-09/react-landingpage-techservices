import React from "react";
import "../styles/home.css";
import "../styles/mediaQuery.css";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-main">
          <h1>Tech Services</h1>
          <p>Solution to all your problems</p>
        </div>
      </div>
      <div className="home2" id="services">
        <img src={vg} alt="Graphics" />
        <div className="home2-desc">
          <p>
            Revolutionize the way you approach toward your modern problems with
            secure IT Solutions. We are providing the entire infrastructure of
            the IT industry.Get end-to-end IT solutions, consulting services and
            more for your business today. Insight's business IT solutions will
            help you transform your IT software ...
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div className="home3-desc">
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            aliquid quasi delectus, et blanditiis necessitatibus quod dolorem
            iusto cum praesentium eum. Doloremque quis voluptate, soluta
            laboriosam sit molestias et obcaecati.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div className="home4-desc">
          <h1>Brands</h1>
          <article>
            <div className="article-images" style={{ animationDelay: "0.1s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div className="article-images" style={{ animationDelay: "0.4s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div className="article-images" style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div className="article-images" style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
