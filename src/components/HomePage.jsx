import React, { useEffect } from "react";
import img1 from "../assets/LostAndFound1.jpg";
import img2 from "../assets/LostAndFound2.png";
import img3 from "../assets/LostAndFound3.jpeg";
import img5 from "../assets/LostAndFound4_atm card.jpeg";
import img4 from "../assets/LostAndFound4_airpod found.jpeg";
import "./HomePage.css";
import Connect from '../assets/connect.jpeg'
import Postimg from '../assets/post.jpeg'
import Searcgimg from '../assets/search.jpeg'
import { Link } from "react-router-dom";

const HomePage = () => {
  const imageAndQuotes = [
    [img1, "Sometimes, what we lose finds its way back to us in the most unexpected ways."],
    [img2, "What’s meant to be found will always find its way home."],
    [img3, "Finding what was lost restores more than just an object—it restores peace."],
    [img4, "The beauty of finding is in the unexpected joy it brings."],
    [img5, "What’s lost to one person is often found by another with a grateful heart."],
  ];
   let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
    // setInterval(function(){
    //   plusSlides(1)
    // },5000)
  }, []);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("home-mySlides");
    let dots = document.getElementsByClassName("home-dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" home-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " home-active";
  }

  return (
    <div>
      <div className="home-slideshow-container">
        {imageAndQuotes.map((item, index) => {
          return (
            <div className="home-mySlides home-fade" key={index}>
             
              <img
                src={item[0]}
                className="home-img"
                alt={index}
                style={{ width: "100%" }}
              />
              <div className="home-text">{item[1]}</div>
            </div>
          );
        })}

        <div className="home-prev" onClick={() => plusSlides(-1)}>
          ❮
        </div>
        <div className="home-next" onClick={() => plusSlides(1)}>
          ❯
        </div>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        {Array.from({ length: imageAndQuotes.length }).map((item, index) => (
          <span key={index}
            className="home-dot"
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>

      <section class="hero">
    <h1>Reconnect with Your Lost Items</h1>
    <p>"Every item has a story and home. We're here to write the happy ending."
    <br/>Post lost or found items and help reunite people with their belongings.</p>
    <Link class="button" to='/foundform'>Post Found Item</Link>
    <Link class="button" to='/lostform'>Post Lost Item</Link>
  </section>

  <section class="features">
    <div class="feature">
      <img src={Postimg} alt="Post icon"/>
      <h2>Post Items</h2>
      <p>Easily post details about lost or found items.</p>
    </div>
    <div class="feature">
      <img src={Searcgimg} alt="Search icon"/>
      <h2>Search</h2>
      <p>Find matching items in our extensive database.</p>
    </div>
    <div class="feature">
      <img src={Connect} alt="Connect icon"/>
      <h2>Connect</h2>
      <p>Safely connect with item finders or owners.</p>
    </div>
  </section> 
    </div>
  );
};

export default HomePage;
