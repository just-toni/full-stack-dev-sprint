import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <nav className="navbar">
    //   <div className="navbar-logo">
    //     <Link to="/">MVMT</Link>
    //   </div>
    //   <ul className="nav-links">
    //     <li>
    //       <Link to="/men">Men</Link>
    //     </li>
    //     <li>
    //       <Link to="/women">Women</Link>
    //     </li>
    //     <li>
    //       <Link to="/brand">Brand</Link>
    //     </li>
    //     <li>
    //       <Link to="/profile">Profile</Link>
    //     </li>
    //     <li>
    //       <Link to="/cart">Cart</Link>
    //     </li>

    //   </ul>
    // </nav>
    <nav className="navbar">
        <div>
            <h4>Get the Good Stuff</h4>
            <p>Get an extra 20% off your first purchase and keep up with our latest drops, special editions and members-only sales.</p>
            <input type="text" placeholder="Enter your email address" />
            <Button:submit>Sign Up</Button:submit>
        </div>
        <div>
            <ul className="nav-links">
                <li id="facebook-icon">            
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                </li>
                <li id="youtube-icon">            
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                </li>
                <li id="instagram-icon">            
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                </li>
                <li id="tiktok-icon">            
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                </li>
            </ul>
        </div>
        <div>
            <ul className="nav-links"> Shop MVMT
                <li>            
                    <Link to="/">MVMT</Link>
                </li>
                <li>   
                    <Link to="/">Jewellery</Link>         
                </li>
            </ul>
        </div>
        <div>
            <ul className="nav-links"> Customer Service
                <li>            
                    <Link to="/">My Account</Link>
                </li>
                <li>   
                    <Link to="/">Contact Us</Link>         
                </li>
            </ul>
        </div>
        {/* dropdown thingy */}
        <div>
            <p>2024 MVMT</p>
            <p>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Privacy Policy</Link>
            </p>
        </div>
    </nav>
    
  );
};

export default Footer;
