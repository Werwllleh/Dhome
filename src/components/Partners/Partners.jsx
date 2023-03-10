import React from "react";
import { Carousel } from "antd";
import Link from "next/link";

import s from "../Partners/Partners.module.css";
import Image from "next/image";

const partners = [
  {
    href: "https://xn----7sbhqqjkgebi5npb.xn--p1ai/",
    imageSrc: "/images/partners/oknap.svg",
    alt: "Окна поволжья",
  },
  {
    href: "https://www.ctep.ru/",
    imageSrc: "/images/partners/CHZSP.svg",
    alt: "Чебоксарский завод строительных профилей",
  },
  {
    href: "https://xn--80ajigieluo.xn--p1ai/",
    imageSrc: "/images/partners/timerline.svg",
    alt: "Тимерлайн",
  },
];

const settings = {
  className: "partner_item",
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  pauseOnHover: true,
  dots: false,
  appendDots: (dots) => (
    <div>
      <ul className={s.partnersDots}> {dots} </ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
      <div className={s.body}>
        <div className="container">
          <div className={s.textBlock}>
            <h2 className={s.title}>Наши партнеры</h2>
            <div className={s.partners}>
              <Carousel {...settings}>
                {partners.map((partner, index) => (
                  <div key={index} className={s.partSlide}>
                    <Link target={"_blank"} href={partner.href}>
                      <Image
                        width={300}
                        height={95}
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
