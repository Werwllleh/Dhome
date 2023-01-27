import React from "react";
import { Carousel } from "antd";
import s from "../Feedback/Feedback.module.css";
import Form from "./Form/Form";

const contentStyle = {
  /* height: "160px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79", */
};

const sliderStyle = {
  width: "700px",
};

const Feedback = () => {
  return (
    <div id="feedback">
      <div className="container">
        <div className={s.body}>
          <Form />
          <div style={sliderStyle}>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>DDDD</h3>
              </div>
              <div>
                <h3 style={contentStyle}>ewfwefwewef</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
