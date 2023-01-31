import React from "react";
import s from "../Projects/Projects.module.css";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

import placeIcon from "./../../../images/icons/place.png";

import home1 from "./../../../images/projects/1/image1.jpeg";
import home2 from "./../../../images/projects/2/image2.jpeg";
import home3 from "./../../../images/projects/3/image3.jpeg";
import home4 from "./../../../images/projects/4/image4.jpeg";
import home5 from "./../../../images/projects/5/image5.jpeg";
import home6 from "./../../../images/projects/6/image6.jpeg";
import home7 from "./../../../images/projects/7/image7.jpeg";
import home8 from "./../../../images/projects/8/image8.jpeg";

const settings = {
  className: "partner_item",
  slidesToShow: 4,
  infinite: true,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  pauseOnHover: true,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const houses = [
  {
    href: "#",
    imageSrc: home1,
    title: "Архангельское-3",
    place: "г. Ульяновск",
    price: 2500,
    square: 300,
    works: "фундамент, дом, крыша, окна, внешняя отделка, террасы.",
  },
  {
    href: "#",
    imageSrc: home2,
    title: "Архангельское-3",
    place: "г. Ульяновск",
    price: 2500,
    square: 300,
    works: "фундамент, дом, крыша, окна, внешняя отделка, террасы.",
  },
  {
    href: "#",
    imageSrc: home3,
    title: "Архангельское-3",
    place: "г. Ульяновск",
    price: 2500,
    square: 300,
    works: "фундамент, дом, крыша, окна, внешняя отделка, террасы.",
  },
  {
    href: "#",
    imageSrc: home4,
    title: "Архангельское-3",
    place: "г. Ульяновск",
    price: 2500,
    square: 300,
    works: "фундамент, дом, крыша, окна, внешняя отделка, террасы.",
  },
  {
    href: "#",
    imageSrc: home5,
    title: "Архангельское-3",
    place: "г. Ульяновск",
    price: 2500,
    square: 300,
    works: "фундамент, дом, крыша, окна, внешняя отделка, террасы.",
  },
  {
    href: "#",
    imageSrc: home6,
    title: "Архангельское-3",
    place: "г. Ульяновск",
    price: 2500,
    square: 300,
    works: "фундамент, дом, крыша, окна, внешняя отделка, террасы.",
  },
  {
    href: "#",
    imageSrc: home7,
    title: "Архангельское-3",
    place: "г. Ульяновск",
    price: 2500,
    square: 300,
    works: "фундамент, дом, крыша, окна, внешняя отделка, террасы.",
  },
  {
    href: "#",
    imageSrc: home8,
    title: "Архангельское-3",
    place: "г. Ульяновск",
    price: 2500,
    square: 300,
    works: "фундамент, дом, крыша, окна, внешняя отделка, террасы.",
  },
];

const Projects = () => {
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
            <div className={s.head_arrows}></div>
          </div>
          <div className={s.project_slider}>
            {houses.map((home, index) => (
              <div className={s.project_slide}>
                <Link key={index} target={"_blank"} href={home.href}>
                  <Image
                    className={s.home_img}
                    src={home.imageSrc}
                    alt={home.title}
                  />
                </Link>
                <div className={s.textBlock}>
                  <div className={s.home_title}>{home.title}</div>
                  <div className={s.home_place}>
                    <Image
                      className={s.home_place_icon}
                      src={placeIcon}
                      alt={"place icon"}
                    />
                    <p>{home.place}</p>
                  </div>
                  <div className={s.home_square}>
                    {"S = " + home.square}
                    <sup>2</sup>
                  </div>
                </div>
                <div className={s.priceBlock}>
                  <div className={s.home_price}>
                    <span>₽ </span>
                    {home.price}
                  </div>
                </div>
              </div>
            ))}

            {/* <Carousel {...settings}>
              {houses.map((home, index) => (
                <div className={s.partSlide}>
                  <Link key={index} target={"_blank"} href={home.href}>
                    <Image
                      className={s.partner_img}
                      src={home.imageSrc}
                      alt={home.alt}
                    />
                  </Link>
                </div>
              ))}
            </Carousel> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
