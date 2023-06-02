import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cognira from '../Assets/cognira-logo-672x284px.png'
import logo1 from '../Assets/images.png'
import BNA from '../Assets/Logo_BNA_BANK_-_Banque_Nationale_Agricole.png'
import BIAT from '../Assets/Logo_BIAT_FR_(3).png' 
import microsoft from '../Assets/microsoft_logo.png'
import orange from '../Assets/Orange_logo.png'
import "./Slider.css";

class SliderPartner extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div className="mainContainer">
        <Slider {...settings}>
          <div className="container">
            <img src={Cognira} />
          </div>
          <div className="container">
            <img src={BNA} />
          </div>
          <div className="container">
            <img src={BIAT} />
          </div>
          <div className="container">
            <img src={logo1} />
          </div>
          <div className="container">
            <img src={microsoft} />
          </div>
          <div className="container" id="orange">
            <img  src={orange} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderPartner;