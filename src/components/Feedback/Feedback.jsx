import React from "react";
import { Carousel } from "antd";
import s from "../Feedback/Feedback.module.css";
import Form from "./Form/Form";
import Image from "next/image";

const slides = [
  {
    imageSrc: "/images/feedback_slider/slide.jpg",
    alt: "",
  },
  {
    imageSrc: "/images/feedback_slider/fdf.png",
    alt: "",
  },
  {
    imageSrc: "/images/feedback_slider/slide.jpg",
    alt: "",
  },
  {
    imageSrc: "/images/feedback_slider/fdf.png",
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
  dots: false,
  fade: true,
};

const Feedback = () => {
  return (
    <div className={s.feedback} id="feedback">
      <div className="container">
        <div className={s.body}>
          <Form />
          <div className={s.slider_feedback}>
            <Carousel {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className={s.slideFeedback}>
                  <img
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
