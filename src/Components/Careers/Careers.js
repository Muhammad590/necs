import React from "react";
import donate from "../../Images/donate.png";
import { Row, Col } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Careers.css";
function Careers() {
  return (
    <div>
      <div className="donate_main">
        <div className="donate_mainheader">
          <h3 className="donate_headertext">We Are Hiring</h3>
        </div>
      </div>

      <div>
        <div className="career_border">
          <img className="carer_donimg" src={donate} />
          <div className="text_divcarer">
            <h5 className="open_position">Open Positions</h5>
            <p className="carertext">
              Please send all resumes and cover letters to Suquilah Stillwell
              via email at Suquilah.Stillwell@necservices.org.
            </p>
          </div>
          <div className="boxes_row">
            <Row className="row_career">
              <Col className="col_career" lg={3} md={3} sm={3}>
                <div className="lorem_box">
                  <div className="boxes_lorem">
                    <div className="circle_lporem">
                      <AiOutlineArrowDown />
                    </div>
                  </div>
                  <h4 className="lorem_coach">
                    LOREM
                    <br />
                    COACH
                  </h4>
                  <p className="lorem_details">Details</p>
                </div>
              </Col>
              <Col className="col_career" lg={3} md={3} sm={3}>
                <div className="lorem_boxone">
                  <div className="boxes_lorem"></div>
                  <h4 className="lorem_coachwhite">
                    LOREM
                    <br />
                    COACH
                  </h4>
                  <p className="lorem_detailswhite">Details</p>
                  <div className="circle_lporemwhite">
                    <AiOutlineArrowDown color="white" />
                  </div>
                </div>
              </Col>

              <Col className="col_career" lg={3} md={3} sm={3}>
                <div className="lorem_boxtwo">
                  <div className="boxes_lorem"></div>
                  <h4 className="lorem_coaches">
                    LOREM
                    <br />
                    COACH
                  </h4>
                  <p className="lorem_details">Details</p>
                  <div className="circle_lporem">
                    <AiOutlineArrowDown />
                  </div>
                </div>
              </Col>

              <Col className="col_career" lg={3} md={3} sm={3}></Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="parent_aidediv">
        <h4 className="parent-aide">PARENT AIDE</h4>
        <h6 className="parent-aidereq">Required Qualications:</h6>
        <p className="parent-aidereqtext">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet consectetur purus non feugiat. Fusce ac rhoncus erat, eget gravida tellus. Phasellus ac lectus lectus. Mauris aliquet suscipit ligula at placerat. Donec sed sagittis arcu. In in odio maximus, consectetur lacus lobortis, iaculis diam. Curabitur fermentum sapien purus, ut accumsan mauris malesuada blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus efficitur, nunc 
</p>
<p className="parent-aidereq core">
Core Responsibilities:
</p>
<p className="parent-aidereqtext">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet consectetur purus non feugiat. Fusce ac rhoncus erat, eget gravida tellus. Phasellus ac lectus lectus. Mauris aliquet suscipit ligula at placerat. Donec sed sagittis arcu. In in odio maximus, consectetur lacus lobortis, iaculis diam. Curabitur fermentum sapien purus, ut accumsan mauris malesuada blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus efficitur, nunc 
</p>
<p className="parent-aidereq core">
Competitive salary and benefits.</p>

      </div>
      <div className="aplly_btndiv">
      <button className="aplly_btn">Apply</button>
      </div>
    </div>
  );
}

export default Careers;
