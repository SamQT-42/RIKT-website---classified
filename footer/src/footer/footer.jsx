import React from "react";
import "./footer.css";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png"; // Make sure you have this image
import logo1 from "../assets/rec1.png"; // Placeholder for the large image on the left
import logo2 from "../assets/rec2.png"; // Placeholder for the second large image
import circle1 from "../assets/cir1.png"; // Placeholder for the first circle on the right
import circle2 from "../assets/cir2.png"; // Placeholder for the second circle

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logos">
          <img src={logo1} alt="Logo 1" className="footer-logo" />
          <img src={logo2} alt="Logo 2" className="footer-logo" />
        </div>
        <div className="footer-right-icons">
          <img src={circle1} alt="Circle 1" className="footer-circle" />
          <img src={circle2} alt="Circle 2" className="footer-circle" />
        </div>
      </div>

      <div className="sb_footer section_padding">
        <div className="sb_footer_links">
          <div className="sb_footer-links-div">
            <a href="/faqs"><p>FAQs</p></a>
            <a href="/contact"><p>Contact Us</p></a>
          </div>
          <div className="sb_footer-links-div">
            <a href="/about"><p>About Us</p></a>
            <a href="/address"><p>Address</p></a>
          </div>
          <div className="sb_footer-links-div highlight">
            <p>RITK</p>
          </div>
        </div>
        <hr />

        <div className="sb_footer-below">
          <div className="sb_footer-below-links">
            <a href="/cookies"><p>Cookies Policy</p></a>
            <a href="/privacy"><p>Privacy Policy</p></a>
            <a href="/legal"><p>Legal Terms</p></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
