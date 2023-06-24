import React from "react";
import aboutv from "../../Images/aboutv.png";
import { Row, Col } from "react-bootstrap";
import mail from "../../Images/mail.png";
import location from "../../Images/location.png";
import check from "../../Images/check.png";
import Form from "react-bootstrap/Form";
import homelo from "../../Images/Group 5.png";
import line from "../../Images/homeline.png"
import homethree from "../../Images/homethree.png"
import homefor from "../../Images/homefor.png"
import homefiv from "../../Images/homefive.png"
import homesix from "../../Images/homesix.png"
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="Home_maindiv">
        <div className="firstdiv_home">
<div className="line_div">
  <img className="line-imgg" src={line} />
  <p className="lorem_mainHomepara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.</p>
  <div>
  <img src={homethree} />
  <img src={homefor} />
  <img src={homefiv} />
  <img src={homesix} />
</div>
</div>

        </div>

        {/* <div className="ncspartnermainDiv">
          <h4 className="ncspartner">NCS Partners</h4>
          <div className="aboutvDiv">
            <img src={aboutv} />
            <img src={aboutv} />
            <img src={aboutv} />
            <img src={aboutv} />
            <img src={aboutv} />
          </div>
        </div> */}

        {/* 3rd portion */}
        {/* <div>
          <Row className="home_row">
            <Col className="home_row" lg={6} md={6} sm={12}>
              <div>
                <img className="homeloimg" src={homelo} />
              </div>
            </Col>
            <Col className="home_row" lg={6} md={6} sm={12}>
              <div className="home_righttext">
                <h4 className="lorem_homescnd">
                  Lorem ipsum <span className="lorem_homescndred">dolor sit amet</span>, consectetur
                  adipiscing <span className="lorem_homescndred">elit. <br/>Nam.</span>
                </h4>
                <p className="lorem_homepara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam.
                </p>
                <button className="lorem_btnhome">Lorem ipsum</button>
              </div>
            </Col>
          </Row>
        </div> */}
        {/* cards */}
        {/* <div className="fourthportionDiv">
          <p className="forth_portionpara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
          </p>
          <div className="aboutCardsDivflex">
            <div className="cardfourthportionDiv">
              <div className="checkImgdiv">
                <img className="checkImg" src={check} />
              </div>
              <h5 className="checkhead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              </h5>
              <p className="checkpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam.Lorem ipsum dolor sit amet,{" "}
              </p>
            </div>

            <div className="cardfourthportionDiv diveide">
              <div className="checkImgdiv">
                <img className="checkImg" src={check} />
              </div>
              <h5 className="checkhead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              </h5>
              <p className="checkpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam.Lorem ipsum dolor sit amet,{" "}
              </p>
            </div>

            <div className="cardfourthportionDiv">
              <div className="checkImgdiv">
                <img className="checkImg" src={check} />
              </div>
              <h5 className="checkhead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              </h5>
              <p className="checkpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam.Lorem ipsum dolor sit amet,{" "}
              </p>
            </div>
          </div>
        </div> */}

        {/* forms */}
        {/* <div className='ineer_seventh'>
        <div >
<h4 className='dona_head'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.</h4>
<p className='dona_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <Row className='donate_row'>
        <Col className='donate_col col_donateleft' lg={6} md={12} sm={12}>
<div className='left_col'>
    <img className='lorem_donateloc' src={location} />
    <span className='lorem_donate1'>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
</div>
<div className='left_col'>
    <img className='lorem_donatemail'  src={mail} />
    <span className='lorem_donate'>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
</div>
        </Col>
        
        <Col  className="donate_col" lg={6} md={12} sm={12}>
    <div className="donte_form">
<div className="form_flexdont">
<Form.Control
className="form_inputtxtdont "
          type="text"
          placeholder="First Name *"
         
         
        />
        <Form.Control
        className="form_inputtxtdont text_donateone"
          type="text"
          placeholder="Last Name *"
         

        />
</div>
<div className="form_flex">
<Form.Control
className="form_inputtxtdont "
          type="email"
          placeholder="Email *"
         

        />
        <Form.Control
        className="form_inputtxtdont text_donateone"
          type="number"
          placeholder="Phone Number *"
         

        />
</div>
        <Form.Control
        className="form_inputtextdonte"
          type="text"
          placeholder="Description"
         

        />
        <button className="form_submitdonate">Submit</button>
      </div>
    </Col>
      </Row>
      </div> */}
      </div>
    </div>
  );
}

export default Home;
