import React from "react";
import "./Footer.css";
import FacebookOutLinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_conatiner">
        <div className="footer_icons">
          <FacebookOutLinedIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Realtion</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Job</li>
              <li>Cookie Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Card</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>service code</p>
        </div>
        <div className="copy_write">&copy; 2025 - 2026 NetFlix Inc,</div>
      </div>
    </div>
  );
};

export default Footer;
