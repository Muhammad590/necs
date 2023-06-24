import React from "react";
import { Row, Col } from "react-bootstrap";
import program from "../../Images/program.png";
import check from "../../Images/check.png";
import Form from "react-bootstrap/Form";
import mail from "../../Images/mail.png"
import location from "../../Images/location.png"
import aboutv from "../../Images/aboutv.png";
import "./Program.css";
function Program() {
  return (
    <div>
      <div className="donate_main">
        <div className="donate_mainheader">
          <h3 className="donate_headertext">Our Program</h3>
        </div>
        {/* first section */}
        <div>
          <Row className="pad_row">
            <Col className="pad_row" lg={6} md={6} sm={12}>
              <div className="st_colprogram">
                <p className="program_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus aliquet consectetur purus non feugiat. Fusce ac
                  rhoncus erat, eget gravida tel
                </p>
                <p className="program_paraone">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus aliquet consectetur purus non feugiat. Fusce ac
                  rhoncus erat, eget gravida tellus. Phasellus ac lectus lectus.
                  Mauris aliquet suscipit ligula at placerat. Donec sed sagittis
                  arcu. In in odio maximus, consectetur lacus lobortis, iaculis
                  diam. Curabitur fermentum sapien purus, ut accumsan mauris
                  malesuada blandit. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Phasellus
                  efficitur, nunc
                </p>
              </div>
            </Col>
            <Col className="pad_row" lg={6} md={6} sm={12}>
              <div className="program_imgDiv">
                <img className="programimg" src={program} />
              </div>
            </Col>
          </Row>
        </div>

        {/* 2nd section */}

        <div className="check_portionmainDiv">
          <div className="check_portionone">
            <div className="checkImgdiv">
              <img className="checkImg" src={check} />
            </div>
            <div>
              <h5 className="check_loem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h5>
              <p className="check_loempara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="check_portionone whiteportion">
            <div className="checkImgdiv">
              <img className="checkImg" src={check} />
            </div>
            <div>
              <h5 className="check_loemwhite">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h5>
              <p className="check_loemparawhite">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="check_portionone">
            <div className="checkImgdiv">
              <img className="checkImg" src={check} />
            </div>
            <div>
              <h5 className="check_loem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h5>
              <p className="check_loempara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
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



{/* carrds */}
<div></div>

{/* form */}
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
      </div>
      </div>
    </div>
  );
}

export default Program;
