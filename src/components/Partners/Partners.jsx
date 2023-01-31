import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

import s from "../Partners/Partners.module.css";
import okna from "../../../images/partners/okna-p.svg";
import chzsp from "../../../images/partners/CHZSP.svg";
import timerline from "../../../images/partners/timerline.svg";

const partners = [
  {
    href: "https://xn----7sbhqqjkgebi5npb.xn--p1ai/",
    imageSrc: okna,
    alt: "Окна поволжья",
  },
  {
    href: "https://www.ctep.ru/",
    imageSrc: chzsp,
    alt: "Чебоксарский завод строительных профилей",
  },
  {
    href: "https://xn--80ajigieluo.xn--p1ai/",
    imageSrc: timerline,
    alt: "Тимерлайн",
  },
  {
    href: "https://xn----7sbhqqjkgebi5npb.xn--p1ai/",
    imageSrc: okna,
    alt: "Окна поволжья",
  },
  {
    href: "https://www.ctep.ru/",
    imageSrc: chzsp,
    alt: "Чебоксарский завод строительных профилей",
  },
  {
    href: "https://xn--80ajigieluo.xn--p1ai/",
    imageSrc: timerline,
    alt: "Тимерлайн",
  },
];

const settings = {
  className: "partner_item",
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 2,
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

const Partners = () => {
  return (
    <div id="partners">
      <div className="container">
        <div className={s.body}>
          <div className={s.textBlock}>
            <h2 className={s.title}>Наши партнеры</h2>
            <div className={s.partners}>
              <Carousel {...settings}>
                {partners.map((partner, index) => (
                  <div className={s.partSlide}>
                    <Link key={index} target={"_blank"} href={partner.href}>
                      <Image
                        className={s.partner_img}
                        src={partner.imageSrc}
                        alt={partner.alt}
                      />
                    </Link>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
