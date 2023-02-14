import React, { useState, useRef } from "react";
import s from "../Projects/Projects.module.css";
import { Carousel, Image } from "antd";
import { houses } from "./objects";

import ModalReq from "../Modal/ModalReq";
import MyPreview from "./MyPreview/MyPreview";
import Link from "next/link";

const settings = {
  className: "partner_item",
  slidesToShow: 5,
  infinite: true,
  slidesToScroll: 5,
  swipeToSlide: true,
  swipe: true,
  autoplay: false,
  autoplaySpeed: 4000,
  speed: 800,
  pauseOnHover: true,
  pauseOnFocus: true,
  dots: false,
  initialSlide: 0,
  touchThreshold: 8000,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      },
    },
    {
      breakpoint: 930,
      settings: {
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
  appendDots: (dots) => (
    <div>
      <ul className={s.projectsDots}> {dots} </ul>
    </div>
  ),
};

const Projects = () => {
  const sliderRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [modaldata, setmodaldata] = useState("");

  const goNext = () => {
    sliderRef?.current?.next();
  };

  const goPrev = () => {
    sliderRef?.current?.prev();
  };

  const om = (data) => {
    setOpenModal(!openModal);
    setmodaldata(data);
  };

  return (
    <div className={s.projects} id="projects">
      <div className="container">
        <div className={s.body}>
          <div className={s.head}>
            <div className={s.head_text}>
              <h2>
                Самые популярные <span>объекты</span>
              </h2>
              <p>
                Мы можем адаптировать под SIP - технологию любой проект. Вы
                можете нарисовать его от руки, можете выбрать из десятков тысяч
                представленных в интернете. Ниже представлены реализованные
                дома.
              </p>
            </div>
            <div className={s.head_btns}>
              <Link
                href={"/objects"}
                className={"btn" + " " + s.btn_all_projects}
              >
                Все объекты
              </Link>
              <div className={s.arrows}>
                <button
                  className={s.arrow + " " + s.prev}
                  type={"text"}
                  onClick={goPrev}
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.0201 27.9171L12.1029 19L21.0201 10.0828L23.2295 12.2921L16.5217 19L23.2295 25.7078L21.0201 27.9171Z"></path>
                  </svg>
                </button>
                <button
                  className={s.arrow + " " + s.next}
                  type={"text"}
                  onClick={goNext}
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.9799 27.9171L25.8971 19L16.9799 10.0828L14.7705 12.2921L21.4783 19L14.7705 25.7078L16.9799 27.9171Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={s.project_slider}>
            <Carousel ref={sliderRef} {...settings}>
              {houses.map((home, index) => (
                <div key={index} className={s.project_slide}>
                  <MyPreview
                    img={home.imageSrc}
                    title={home.title}
                    imgArr={home.other}
                  />
                  <div className={s.textBlock}>
                    <div>
                      <div className={s.home_title}>{home.title}</div>
                      <div className={s.home_place}>
                        <img
                          className={s.home_place_icon}
                          src={"/images/icons/place.png"}
                          alt={"place icon"}
                        />
                        <p>{home.place}</p>
                      </div>
                    </div>
                    <div className={s.home_square}>
                      {"S = " + home.square}
                      <sup>2</sup>
                    </div>
                  </div>
                  <div className={s.priceBlock}>
                    <div className={s.home_price}>
                      <p>Стоимость:</p>
                      <p>{"₽" + " " + home.price}</p>
                    </div>
                    <button
                      onClick={() => om(home.title)}
                      datatitle={home.title}
                      className={"btn" + " " + s.home_buy_btn}
                      type="button"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <ModalReq
        openModal={openModal}
        setOpenModal={setOpenModal}
        modaldata={modaldata}
      />
    </div>
  );
};

export default Projects;
