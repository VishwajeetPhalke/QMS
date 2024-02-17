import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/images/q.jpeg'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={logo} alt="logoimage"></img>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/"><span ><span className="home" >HOME</span></span></NavLink>
            </li>
            <li>
              <NavLink to="/Aboutus"><span ><span className="home" >ABOUT-US</span></span></NavLink>
            </li>
            <li>
              <NavLink to="/service"><span ><span className="home" >SERVICES</span></span></NavLink>
            </li>
            <li>
              <NavLink to="/Clients"><span ><span className="home" >CLIENTS</span></span></NavLink>
            </li>
            <li>
              <NavLink to="/Ushealthcare"><span ><span className="home">US-HEALTHCARE</span></span></NavLink>
            </li>
            <li>
              <NavLink to="/career"><span ><span className="home" >CAREER</span></span></NavLink>
            </li>
            <li>
              <NavLink to="/Contact"><span ><span className="home" >CONTACT-US</span></span></NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;