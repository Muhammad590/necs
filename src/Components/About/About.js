import React from "react";
import { Row, Col } from "react-bootstrap";
import donate from "../../Images/donateone.png";
import rectange from "../../Images/Rectangle 13.png";
import mail from "../../Images/mail.png"
import location from "../../Images/location.png"
import Form from "react-bootstrap/Form";
import aboutv from "../../Images/aboutv.png";
import check from "../../Images/check.png";
import "./About.css";
function About() {
  return (
    <div style={{ position: "relative" }}>
      <div className="donate_main">
        <div className="donate_mainheader">
          <h3 className="donate_headertext">About NECS</h3>
        </div>

        <div className="about_mainDiv">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div>
                <img className="donate_aboutimg" src={donate} />
                <img className="rec_aboutimg" src={rectange} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <p className="about_firstpara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus aliquet consectetur purus non feugiat. Fusce ac
                  rhoncus erat, eget gravida tellus. Phasellus ac lectus lectus.
                  Mauris aliquet suscipit ligula at placerat. Donec sed sagittis
                  arcu. In in odio maximus, consectetur lacus lobortis, iaculis
                  diam. Curabitur fermentum sapien purus, ut accumsan mauris
                  malesuada blandit. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Phasellus
                  efficitur, nunc non egestas mollis, mauris neque varius velit,
                  non mollis nulla ante sit amet lorem.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Vivamus aliquet consectetur
                  purus non feugiat. Fusce ac rhoncus erat, eget gravida tellus.
                  Phasellus ac lectus lectus. Mauris aliquet suscipit ligula at
                  placerat. Donec sed sagittis arcu. In in odio maximus,
                  consectetur lacus lobortis, iaculis diam. Curabitur fermentum
                  sapien purus, ut accumsan mauris malesuada blandit. Orci
                  varius nat
                </p>
              </div>
            </Col>
          </Row>
        </div>
        {/* 2nd portion */}
        <div className="ncspartnermainDiv">
          <h4 className="ncspartner">NCS Partners</h4>
          <div className="aboutvDiv">
            <img src={aboutv} />
            <img src={aboutv} />
            <img src={aboutv} />
            <img src={aboutv} />
            <img src={aboutv} />
          </div>
        </div>

        {/* 3rd portion */}
        <div className="about3rdportionDiv">
          <h4 className="about3rdportionhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquet consectetur purus non feugiat. Fusce ac rhoncus erat, eget
            gravida tellus. Phasellus ac lectus lectus. Mauris aliquet suscim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </h4>
          <p className="about3rdportionpara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquet consectetur purus non feugiat. Fusce ac rhoncus erat, eget
            gravida tellus. Phasellus ac lectus lectus. Mauris aliquet suscipit
            ligula at placerat. Donec sed sagittis arcu. In in odio maximus,
            consectetur lacus lobortis, iaculis diam. Curabitur fermentum sapien
            purus, ut accumsan mauris malesuada blandit. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Phasellus efficitur, nunc
          </p>
        </div>

        {/* fourth portion */}
        <div className="fourthportionDiv">
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
        </div>

        {/* fifth portion */}
        <div className="fifthloremmainDiv">
            <Row>
                <Col lg ={5} md={5} sm={12} > <div>
            <h4 className="fifthloremhead">Lorem ipsum dolor sit amet,</h4>
          </div></Col>
                <Col lg ={7} md={7} sm={12} >
                <div>
            <h4 className="fifthloremhed">Lorem ipsum dolor sit amet,</h4>
            <p className="fifthlorepara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.Lorem
              ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam.Lorem ipsum dolor sit amet, Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nam. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nam.Lorem ipsum dolor sit amet,{" "}
            </p>
          </div>
          <div>
            <h4 className="fifthloremhed">Lorem ipsum dolor sit amet,</h4>
            <p className="fifthlorepara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.Lorem
              ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam.Lorem ipsum dolor sit amet, Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nam. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nam.Lorem ipsum dolor sit amet,{" "}
            </p>
          </div>
          <div>
            <h4 className="fifthloremhed">Lorem ipsum dolor sit amet,</h4>
            <p className="fifthlorepara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.Lorem
              ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam.Lorem ipsum dolor sit amet, Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nam. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nam.Lorem ipsum dolor sit amet,{" "}
            </p>
          </div>
                </Col>
            </Row>
         
     
        </div>

        {/* six portion carousel */}
        <div></div>

        {/* seventh portion */}
        <div className='ineer_seventh'>
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
      </div></div>
    </div>
  );
}

export default About;
