import React from "react";
import Navbars from "../Navbars/Navbars";
import Form from "react-bootstrap/Form";
import cntct from "../../Images/cntct.png";
import cntactone from "../../Images/cntactone.png";
import line from "../../Images/contact.png";
import { Row, Col } from "react-bootstrap";
import "./Contact.css";
import Office from "./Office";
function Contact() {
  return (
    <div>
      {/* <Navbars /> */}
      <div className="contact_main">
        <div className="contact_mainheader">
          <h3 className="contact_headertext">Contact Us</h3>
        </div>
      </div>
      <Row className="contact_lowerdiv">
        <Col className="col_contact" lg={6} md={12} sm={12}>
          <div className="contact_lowerdivone">
            <div className="img_divdontct">
              <img src={cntct} />
            </div>
            <div className="blackMain">
              <div className="blackImg">
                <img src={line} />
              </div>
              <img className="mesenger_pic" src={cntactone} />
            </div>
          </div>
        </Col>
        <Col className="col_contact" lg={6} md={12} sm={12}>
          <div className="contact_form">
            <p className="contact_formtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="form_flex">
              <Form.Control
                className="form_inputtext "
                type="text"
                placeholder="First Name *"
              />
              <Form.Control
                className="form_inputtext text_filedone"
                type="text"
                placeholder="Last Name *"
              />
            </div>
            <div className="form_flex">
              <Form.Control
                className="form_inputtext "
                type="email"
                placeholder="Email *"
              />
              <Form.Control
                className="form_inputtext text_filedone"
                type="number"
                placeholder="Phone Number *"
              />
            </div>
            <Form.Control
              className="form_inputtextone"
              type="text"
              placeholder="Description"
            />
            <button className="form_submitcontact">Submit</button>
          </div>
        </Col>
      </Row>
      <Office/>
    </div>
  );
}

export default Contact;
