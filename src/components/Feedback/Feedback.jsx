import React, { useState, useEffect } from "react";
import s from "../Feedback/Feedback.module.css";

const Feedback = () => {
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
    <div id="feedback">
      <div className="container">
        <div className={s.body}>
          <div className={s.form_body}>
            <form
              className={s.form}
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <p className={s.form_title}>
                Расскажи нам о своем <span>доме мечты</span>
              </p>
              <label>Ваше имя</label>
              <input
                type="text"
                value={name}
                required
                onChange={onChangeName}
              />
              <label>Ваша эл.почта</label>
              <input
                type="text"
                value={email}
                required
                onChange={onChangeEmail}
              />
              <div className={validate}>Введите корректный Email</div>
              <textarea placeholder={"Опиши свой дом мечты"} />
              <input
                className={"btn" + " " + s.form_btn}
                type="submit"
                value="Отправить"
              />
            </form>
          </div>
          <div className={s.slider}></div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
