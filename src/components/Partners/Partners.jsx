import React from "react";
import Image from "next/image";
import Link from "next/link";

import s from "../Partners/Partners.module.css";
import p1 from "../../../images/patners/partn1.png";
import p2 from "../../../images/patners/partn2.png";
import p3 from "../../../images/patners/partn3.png";
import p4 from "../../../images/patners/partn4.png";
import p5 from "../../../images/patners/partn5.png";

const Partners = () => {
  return (
    <div id="partners">
      <div className="container">
        <div className={s.body}>
          <div className={s.textBlock}>
            <h2 className={s.title}>Наши партнеры</h2>
            <div className={s.partners}>
              <Link href="#">
                <Image className={s.partner_img} src={p1} alt="" />
              </Link>
              <Link href="#">
                <Image className={s.partner_img} src={p2} alt="" />
              </Link>
              <Link href="#">
                <Image className={s.partner_img} src={p3} alt="" />
              </Link>
              <Link href="#">
                <Image className={s.partner_img} src={p4} alt="" />
              </Link>
              <Link href="#">
                <Image className={s.partner_img} src={p5} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
