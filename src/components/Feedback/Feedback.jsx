import React from "react";
import { Carousel } from "antd";
import s from "../Feedback/Feedback.module.css";
import Form from "./Form/Form";
import Image from "next/image";

import slide1 from "./../../../images/feedback_slider/slide.jpg";
import slide2 from "./../../../images/feedback_slider/fdf.png";

const slides = [
  {
    imageSrc: slide1,
    alt: "",
  },
  {
    imageSrc: slide2,
    alt: "",
  },
  {
    imageSrc: slide1,
    alt: "",
  },
  {
    imageSrc: slide2,
    alt: "",
  },
];

const settings = {
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  dots: true,
  fade: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
  appendDots: (dots) => (
    <div>
      <ul className={s.feedbackDots}> {dots} </ul>
    </div>
  ),
};

const Feedback = () => {
  return (
    <div className={s.feedback} /* style={{ display: "none" }} */ id="feedback">
      <div className="container">
        <div className={s.body}>
          <Form />
          <div className={s.slider_feedback}>
            <Carousel {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className={s.slideFeedback}>
                  <Image
                    className={s.__img}
                    src={slide.imageSrc}
                    alt={slide.alt}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
