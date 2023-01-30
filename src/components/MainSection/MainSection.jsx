import React from "react";
import Image from "next/image";

import s from "../MainSection/MainSection.module.css";
import imgHouse from "./../../../images/mainsec/mainsec_house.jpg";

const MainSection = () => {
  return (
    <div id="#">
      <div className={s.body}>
        <Image className={s.mainsec_img} src={imgHouse} alt="" />
        <div className="container">
          <div className={s.textBlock}>
            <h1 className={s.title}>
              Воплотите в жизнь <br />
              <span>Дом Вашей Мечты 🏠️</span>
            </h1>
            <p className={s.text}>
              Мы стараемся как можно лучше понять ваше желание реализовать дом
              вашей мечты, естественно с минимальными затратами, но с
              максимально возможным качеством
            </p>
            <button className={"btn" + " " + s.btn_main}>
              Приступить к строительству
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
