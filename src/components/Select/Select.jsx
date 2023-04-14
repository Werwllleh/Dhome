import React, {useState, useRef} from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

import s from "../Select/Select.module.css";
import Option from "./Option";


export const Select = ({options, defaultValue, placeholder, selectPlace, reset, changeReset}) => {

  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || "Choose an option";
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option) => {
    changeReset(true)
    selectPlace(option);
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className={s.select_container} ref={selectContainerRef}>
      <div
        className={s.selected_text}
        onClick={showDropdownHandler}
      >
        {reset ? selectedOption : selectPlaceholder}
      </div>
      <ul
        className={
          showDropdown
            ? s.select_options + " " + s.show_dropdown_options
            : s.select_options + " " + s.hide_dropdown_options
        }
      >
        {options?.map((option) => (
          <Option
            change={updateSelectedOption}
            key={option}
            value={option}
          ></Option>
        ))}
      </ul>
    </div>
  );
};

export default Select;
