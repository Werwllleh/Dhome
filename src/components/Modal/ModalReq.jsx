import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import Form from "../Feedback/Form/Form";

const ModalReq = ({ openModal, modaldata, setopenModal }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleOk = () => {
    setModalText("Ваше сообщение отправляется...");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setopenModal(false);
      setConfirmLoading(false);
    }, 1500);
  };
  useEffect(() => {
    // console.log(openModal, modaldata);
    setOpen(openModal);
    setModalText(modaldata);
  }, [openModal]);

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setopenModal(false);
    setOpen(false);
  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button> */}
      <Modal
        destroyOnClose={true}
        preserve={false}
        title={"Заявка по объекту - " + modalText}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {modalText}
      </Modal>
    </>
  );
};

export default ModalReq;
