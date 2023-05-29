import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css";


export default class SimpleSlider extends Component {
  render() {
    const imagem1 = 'https://i.pinimg.com/564x/93/5e/84/935e84523d5cdb786c004a7590128b8e.jpg';
    const hunter = "https://i.pinimg.com/564x/e0/65/1f/e0651ff2d0b255dc2ea34ce0239c092d.jpg";
    const eevvee = "https://i.pinimg.com/564x/d9/1d/c2/d91dc247785eabe7f4d144d95cd424c5.jpg"
    const lucario = "https://i.pinimg.com/564x/ee/43/19/ee43195df72b8210e8a52e80e85f817a.jpg";
    const umbreon = "https://i.pinimg.com/564x/83/2a/a6/832aa691c3b028308f4e145fdc246bb8.jpg";
    const charli = 'https://i.pinimg.com/564x/3d/8c/b3/3d8cb38f83082f1478f5be448babbf69.jpg';
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2 className="fs-1"> Um carrocel </h2>
        <Slider {...settings} className="sliderContainer">
          <div>
          <img src={imagem1} alt="img"/>
          </div>
          <div>
          <img src={lucario} alt="img"/>
          </div>
          <div>
          <img src={umbreon} alt="img"/>
          </div>
          <div>
          <img src={hunter} alt="img"/>
          </div>
          <div>
          <img src={eevvee} alt="img"/>
          </div>
          <div>
          <img src={charli} alt="img"/>
          </div>
        </Slider>
      </div>
    );
  }
}