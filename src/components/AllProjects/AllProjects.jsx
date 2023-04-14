import React, {useState, useMemo} from "react";
import s from "../AllProjects/AllProjects.module.css";
import {houses} from "../../utils/objects";

import ModalReq from "../Modal/ModalReq";
import MyPreview from "../Projects/MyPreview/MyPreview";
import Select from "../Select/Select";
import {Slider} from "antd";

const AllProjects = () => {

  let minSquare = Math.min(...houses.map((i) => i.square));
  let maxSquare = Math.max(...houses.map((i) => i.square));

  const [place, setPlace] = useState(null);
  const [square, setSquare] = useState([minSquare, maxSquare]);

  const [clearPlace, setClearPlace] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState("");

  const [filterData] = React.useMemo(() => {
    return [houses.filter(
      (house) => (!place || house.place === place) && (!square || (house.square >= square[0] && house.square <= square[1]))
    )];
  }, [houses, place, square]);

  /*const [filterData] = useMemo(() => {
    let filterData = [...houses.filter((e) => {
      if (place && !square) {
        return e.place === place
      }
      if (!place && square) {
        return e.square >= square[0] && e.square <= square[1]
      }
      if (place && square) {
        return e.place === place && e.square >= square[0] && e.square <= square[1]
      }
      if (!place && !square) {
        return [houses]
      }
    })]
    return [filterData];
  }, [houses, place, square]);*/

  const om = (data) => {
    setOpenModal(!openModal);
    setModalData(data);
  };

  const changeSlider = (e) => {
    setSquare(e)
  }

  const resetFilter = () => {
    setClearPlace(false)
    setPlace(null);
    changeSlider([minSquare, maxSquare])
  }

  return (
    <div className={s.projects}>
      <div className="container">
        <div className={s.body}>
          <div className={s.head}>
            <div className={s.head_text}>
              <h1>
                Готовые <span>объекты</span>
              </h1>
            </div>
          </div>
          <div className={s.projects_content}>
            <div className={s.objects_filter}>
              <div className={s.filter_body}>
                <div className={s.filter_title}>Фильтры</div>
                <div className={s.filter_select}>
                  <Select
                    changeReset={setClearPlace}
                    reset={clearPlace}
                    options={[...new Set(houses.map((i) => i.place))]}
                    selectPlace={setPlace}
                    placeholder={"Местоположение"}
                  />
                </div>
                <div className={s.filter_select}>
                  <div className={s.filter_padding}>
                    <p>Площадь</p>
                    <Slider
                      trackStyle={{backgroundColor: '#fff'}}
                      railStyle={{backgroundColor: "#ffb100"}}
                      range={{draggableTrack: true}}
                      onChange={changeSlider}
                      step={10}
                      min={minSquare}
                      max={maxSquare}
                      defaultValue={square}
                      value={square}
                    />
                  </div>
                </div>
                <button onClick={resetFilter} className={s.filter_reset_btn}>Сброс фильтра</button>
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
        modaldata={modalData}
      />
    </div>
  );
};

export default AllProjects;
