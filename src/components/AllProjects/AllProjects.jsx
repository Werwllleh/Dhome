import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";
import s from "../AllProjects/AllProjects.module.css";
import { houses } from "../Projects/objects";

import ModalReq from "../Modal/ModalReq";
import MyPreview from "../Projects/MyPreview/MyPreview";
import Link from "next/link";
import Select from "../Select/Select";

const AllProjects = () => {
  const [place, setPlace] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [modaldata, setmodaldata] = useState("");

  const [filterData] = useMemo(() => {
    let filterdata = [...houses.filter((e) => e.place === place)];

    if (filterdata.length) {
      return [filterdata];
    } else {
      return [houses];
    }
  }, [houses, place]);

  const om = (data) => {
    setOpenModal(!openModal);
    setmodaldata(data);
  };

  return (
    <div className={s.projects}>
      <div className="container">
        <div className={s.body}>
          <div className={s.head}>
            <div className={s.head_text}>
              <h1>
                Наши <span>объекты</span>
              </h1>
            </div>
          </div>
          <div className={s.projects_content}>
            <div className={s.objects_filter}>
              <div className={s.filter_body}>
                <div className={s.filter_select}>
                  <Select
                    label={"Местоположение"}
                    value={place}
                    onChange={(value) => setPlace(value)}
                    defaultValue="Кол-во элементов на странице"
                    options={[
                      ...new Set(
                        houses.map((i) => {
                          return i.place;
                        })
                      ),
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className={s.project_slider}>
              {filterData?.map((home, index) => (
                <div key={index} className={s.project_slide}>
                  <MyPreview
                    img={home.imageSrc}
                    title={home.title}
                    imgArr={home.other}
                  />
                  <div className={s.textBlock}>
                    <div>
                      <div className={s.home_title}>{home.title}</div>
                      <div className={s.home_place}>
                        <img
                          className={s.home_place_icon}
                          src={"/images/icons/place.png"}
                          alt={"place icon"}
                        />
                        <p>{home.place}</p>
                      </div>
                    </div>
                    <div className={s.home_square}>
                      {"S = " + home.square}
                      <sup>2</sup>
                    </div>
                  </div>
                  <div className={s.priceBlock}>
                    <div className={s.home_price}>
                      <p>Стоимость:</p>
                      <p>{"₽" + " " + home.price}</p>
                    </div>
                    <button
                      onClick={() => om(home.title)}
                      datatitle={home.title}
                      className={"btn" + " " + s.home_buy_btn}
                      type="button"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModalReq
        openModal={openModal}
        setOpenModal={setOpenModal}
        modaldata={modaldata}
      />
    </div>
  );
};

export default AllProjects;
