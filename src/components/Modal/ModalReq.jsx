import React, { useEffect, useState, useRef } from "react";
import { Modal } from "antd";
import s from "../Modal/ModalReq.module.css";

const ModalReq = ({ openModal, modaldata, setopenModal }) => {
  const inputPhone = useRef(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [send, setSend] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePhone = () => {
    const cardValue = inputPhone?.current?.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    // console.log(cardValue);
    if (cardValue?.length > 2) {
      inputPhone.current.value = !cardValue[2]
        ? cardValue[1]
        : `+${(cardValue[1] = 7)}-${cardValue[2]}${`${
            cardValue[3] ? `-${cardValue[3]}` : ""
          }`}${`${cardValue[4] ? `-${cardValue[4]}` : ""}`}${`${
            cardValue[5] ? `-${cardValue[5]}` : ""
          }`}`;
      const numbers = inputPhone.current.value.replace(/(\D)/g, "");
      setPhone(numbers);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length >= 3 && phone.length === 11) {
      setConfirmLoading(true);
      setTimeout(() => {
        setSend(true);
        setOpen(false);
        setopenModal(false);
        setConfirmLoading(false);
      }, 1500);
    } else {
      alert("Введите корректные данные");
    }
  };

  useEffect(() => {
    onChangePhone();
  }, [phone]);

  useEffect(() => {
    setOpen(openModal);
    setModalText(modaldata);
  }, [openModal]);

  const handleCancel = () => {
    setopenModal(false);
    setOpen(false);
  };

  return (
    <>
      <Modal
        className={s.modal_style}
        // title={"Заявка по объекту - " + modalText}
        open={open}
        // onOk={handleSubmit}
        // okText={"Отправить"}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText={"Отмена"}
        footer={null}
      >
        <form className={s.form} method="post" onSubmit={handleSubmit}>
          <h3 className={s.title}>
            {send ? "Заявка отправлена ✅" : "Заявка"}
          </h3>
          <div className={s.field}></div>
            <label>Объект</label>
            <input
              className={s.input}
              type="text"
              defaultValue={modalText}
              disabled
            />
          </div>
          <div className={s.field}>
            <label>Ваше имя</label>
            <input
              disabled={send ? true : false}
              className={s.input}
              placeholder={"Введи свое имя"}
              type="text"
              value={name}
              onChange={onChangeName}
              required
            />
          </div>
          <div className={s.field}>
            <label>Ваш телефон</label>
            <input
              disabled={send ? true : false}
              ref={inputPhone}
              className={s.input}
              placeholder={"+7-999-999-99-99"}
              type="text"
              onChange={onChangePhone}
              required
            />
          </div>
          <input
            disabled={send ? true : false}
            className={"btn" + " " + s.form_btn}
            type="submit"
            value="Отправить"
          />
        </form>
      </Modal>
    </>
  );
};

export default ModalReq;
