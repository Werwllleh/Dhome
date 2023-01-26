import React from "react";
import s from "../Feedback/Feedback.module.css";
import Slide from "../Slider/components/Slide";
import Form from "./Form/Form";

const Feedback = () => {
  return (
    <div id="feedback">
      <div className="container">
        <div className={s.body}>
          <Form />
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
