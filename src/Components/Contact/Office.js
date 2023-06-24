import React from "react";
import Slider from "react-slick";
import carousel from "../../Images/carousel.png";
import carouselone from "../../Images/carouselone.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Office.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
function Office() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    // <div>
    //   <div className="office_main">
    //     <div className="office_inner">
    //       <h4 className="office_innerhead">Our Offices</h4>
    //       <p className="office_innerpara">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam. Lorem
    //         ipsum dolor sit amet, consectetur adipiscing elit. Nam.Lorem ipsum
    //         dolor sit amet, Lorem ipsum dolor sit amet, consectetur{" "}
    //       </p>
    //     </div>
       
       
    //   </div>
    // </div>
//     <div >
//     <div className="slideritem">
//    <Slider {...settings} >

//      <div className="asda asdza">
//        <img src={carousel} />
//        <h3 className="program_office">Program Office</h3>
//        <p className="slider_para">
//          2288 Dorchester Avenue Dorchester, MA 02124 Phone: 617.690.3907
//        </p>
//      </div>
//      <div  className="asda asdza"  >
//        <img src={carousel} />
//        <h3 className="program_office">Program Office</h3>
//        <p className="slider_para">
//          2288 Dorchester Avenue Dorchester, MA 02124 Phone: 617.690.3907
//        </p>
//      </div>
//      <div  className="asda asdza"  >
//        <img src={carousel} />
//        <h3 className="program_office">Program Office</h3>
//        <p className="slider_para">
//          2288 Dorchester Avenue Dorchester, MA 02124 Phone: 617.690.3907
//        </p>
//      </div>
//      <div  className="asda asdza"  >
//        <img src={carousel} />
//        <h3 className="program_office">Program Office</h3>
//        <p className="slider_para">
//          2288 Dorchester Avenue Dorchester, MA 02124 Phone: 617.690.3907
//        </p>
//      </div>
//      <div  className="asda asdza"  >
//        <img src={carousel} />
//        <h3 className="program_office">Program Office</h3>
//        <p className="slider_para">
//          2288 Dorchester Avenue Dorchester, MA 02124 Phone: 617.690.3907
//        </p>
//      </div>
     

    
//    </Slider>
//  </div>
//  </div>

<div className="slideritem slideritem2 sliderotem">
        <Slider
          {...settings}
          arrows={true}
          autoplay={true}
          autoplaySpeed={2000}
        >
          <div className="asda asdza">
            <h1>Haircut</h1>
            <img src={carouselone} alt="" />
          </div>
          <div className="asda asdza">
            <h1>Haircut</h1>
            <img src={carouselone} alt="" />
          </div>
          <div className="asda asdza">
            <h1>Haircut</h1>
            <img src={carouselone} alt="" />
          </div>
          <div className="asda asdza">
            <h1>Haircut</h1>
            <img src={carouselone} alt="" />
          </div>
        </Slider>
      </div>
  );
}

export default Office;
