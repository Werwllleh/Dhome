import React, { useState, useContext } from "react";
import s from "../MySelect/MySelect.module.css";
import { SelectContext } from "../Select/SelectContext";

const MySelect = ({ options, value, onClick, label }) => {
  const [active, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const showDropdownHandler = () => setActive(!active);
  const first = useContext(SelectContext);
  console.log(first);
  return (
    <>
      <div
      // onClick={showDropdownHandler}
      // className={active ? s.filter_label + " " + s.active : s.filter_label}
      >
        {/* {label} */}
      </div>
      {/* <ul
        className={active ? s.filter_list + " " + s.active : s.filter_list}
        value={value}
        // onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <li
            onClick={(e) => onClick(e.target.value)}
            key={option}
            value={option}
          >
            {option}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default MySelect;
