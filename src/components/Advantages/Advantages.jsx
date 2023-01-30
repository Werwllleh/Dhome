import Image from "next/image";
import React from "react";
import s from "../Advantages/Advantages.module.css";
import discountImg from "./../../../images/icons/discount.png";
import calendarImg from "./../../../images/icons/calendar.png";
import walletImg from "./../../../images/icons/wallet.png";

const Advantages = () => {
  return (
    <div className={s.section_advantages} id="advantages">
      <div className="container">
        <div className={s.body}>
          <div className={s.left}>
            <p>Почему мы?</p>
            <h2>
              Наши <span>преимущества</span> для вас
            </h2>
            <p className={s.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className={s.right}>
            <div className={s.advantages_items}>
              <div className={s.item}>
                <div className={s.icon}>
                  <Image src={discountImg} alt={""} />
                </div>
                <div className={s.name}>15,02% Cash Back</div>
                <div className={s.descpription}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className={s.item}>
                <div className={s.icon}>
                  <Image src={walletImg} alt={""} />
                </div>
                <div className={s.name}>Save Money</div>
                <div className={s.descpription}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className={s.item}>
                <div className={s.icon}>
                  <Image src={calendarImg} alt={""} />
                </div>
                <div className={s.name}>Cheap Installments</div>
                <div className={s.descpription}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
