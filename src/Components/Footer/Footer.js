import React from "react";
import logo from "../../Images/logo.png";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="fotter_main">
        <div className="fotter_mainone">
          <div className="footer_one">
            <img className="foter_img" src={logo} />
            <h4 className="foter_oneinner">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h4>
          </div>
          <div className="footer_two">
            <div className="links_onediv">
              <h4 className="footer_link">Home</h4>
              <h4 className="footer_link">About Us</h4>
              <h4 className="footer_link">Programs</h4>
            </div>
            <div>
              <h4 className="footer_link">Careers</h4>
              <h4 className="footer_link">Contact</h4>
            </div>
          </div>
          <div className="div_three">
            <h4 className="fotter_threeinner">Join our news letter</h4>
            <div className="fotter_divinnerthree">
              <input
                className="inputfiled_three"
                placeholder="Enter Your Email"
                type="emial"
              />
              <button className="Submit_fotterbtn">Submit</button>
            </div>
            <div className="icons_footer">
              <div className="icons_footerinner">
                <GrLinkedinOption className="icons_height" />
              </div>
              <div className="icons_footerinner">
                <FaFacebookMessenger className="icons_height" />
              </div>
              <div className="icons_footerinner">
                <AiOutlineTwitter className="icons_height" />
              </div>
              <div className="icons_footerinner">
                <AiFillInstagram className="icons_height" />
              </div>
            </div>
          </div>
        </div>
        <div >
          <p className="fotter_end">Copyright © 2022 NCS. All Rights Reseved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
