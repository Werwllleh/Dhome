import React, { useState } from "react";
import { Image } from "antd";

const MyPreview = ({ img, imgArr }) => {
  const [visible, setVisible] = useState(false);

  console.log(imgArr);
  return (
    <>
      <Image
        // className={s.home_img}
        preview={{
          visible: false,
        }}
        src={img}
        // alt={home.title}
        onClick={() => setVisible(true)}
      />
      <div
        style={{
          display: "none",
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {imgArr?.map((i) => {
            return <Image src={i} />;
          })}
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default MyPreview;
