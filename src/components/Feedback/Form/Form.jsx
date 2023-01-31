import Image from "next/image";
import React, { useState, useEffect } from "react";
import s from "../Form/Form.module.css";

import iUser from "/images/icons/icon_user.png";
import iEmail from "/images/icons/icon_email.png";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
  };

  let patternEmail = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );
  let validate = s.validateEmail;

  if (patternEmail.test(email)) {
    validate = s.validateEmail;
  } else if (email == "") {
    validate = s.validateEmail;
  } else {
    validate = s.validateEmail + " " + s.error;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length >= 3 && patternEmail.test(email)) {
      alert("ok");
      setName("");
      setEmail("");
    } else {
      alert("not ok");
    }
  };
  return (
    <div className={s.form_body}>
      <form className={s.form} action="" method="post" onSubmit={handleSubmit}>
        <p className={s.form_title}>
          Расскажи нам о своем <br />
          <span>доме мечты</span>
        </p>
        <label>Ваше имя</label>
        <div className={s.field}>
          <Image src={iUser} alt="" />
          <input
            className={s.input_user}
            placeholder={"Введи свое имя"}
            type="text"
            value={name}
            required
            onChange={onChangeName}
          />
        </div>
        <label>Ваша эл.почта</label>
        <div className={s.field}>
          <Image src={iEmail} alt="" />
          <div className={s.emailBlock}>
            <input
              className={s.input_email}
              placeholder={"Введи свою эл.почту"}
              type="text"
              value={email}
              required
              onChange={onChangeEmail}
            />
            <div className={validate}>Введите корректный Email!</div>
          </div>
        </div>
        <textarea placeholder={"Опиши свой дом мечты"} />
        <input
          className={"btn" + " " + s.form_btn}
          type="submit"
          value="Отправить"
        />
      </form>
    </div>
  );
};

export default Form;
