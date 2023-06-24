import React from 'react'
import "./Donate.css"
import Navbars from '../Navbars/Navbars'
import donate from "../../Images/donate.png"
import donateone from "../../Images/donateone.png"
import donatetwo from "../../Images/donatetwo.png"
import donatethree from "../../Images/donatethree.png"
import donatefour from "../../Images/donatefour.png"
import donatefive from "../../Images/donatefive.png"
import donatesix from "../../Images/donatesix.png"
import mail from "../../Images/mail.png"
import location from "../../Images/location.png"
import Form from "react-bootstrap/Form";
import {Row,Col} from "react-bootstrap"
import Footer from '../Footer/Footer'
function Donate() {
  return (
    <div className='donate'>
        
              <div className="donate_main">
        <div className="donate_mainheader">
          <h3 className="donate_headertext">Lorem Ipsum</h3>
        </div>
      </div>
      <div className='donate_imgsdiv'> 
      <img className='im_one' src={donate} />
      <img className='im_two' src={donateone} />
      <img className='im_three' src={donatetwo} />
      <img className='im_four' src={donatethree} />
      <img className='im_five' src={donatefour} />
      <img className='im_six' src={donatefive} />
      <img className='im_seven' src={donatesix} />

      </div>

{/* inner portion */}
      <div className='ineer_donate'>
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
      </Row><br/>
      <br/><br/><br/>
      {/* <Footer  /> */}
    </div>
  )
}

export default Donate
