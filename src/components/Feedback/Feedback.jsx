import React from "react";
import { Carousel } from "antd";
import s from "../Feedback/Feedback.module.css";
import Form from "./Form/Form";
import Image from "next/image";
import slide1 from "./../../../images/feedback_slider/slide.jpg";

const slides = [
  {
    imageSrc: slide1,
    alt: "",
  },
  {
    imageSrc: slide1,
    alt: "",
  },
  {
    imageSrc: slide1,
    alt: "",
  },
  {
    imageSrc: slide1,
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
  pauseOnHover: true,
  dots: true,
};

const Feedback = () => {
  return (
    <div style={{ display: "none" }} id="feedback">
      <div className="container">
        <div className={s.body}>
          <Form />
          <div className={s.slider_feedback}>
            <Carousel {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className={s.feedBackSlide}>
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
