import React, { useState } from "react";
import s from "../Select/Select.module.css";

const Select = ({ options, defaultValue, value, onChange, label }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={s.filter}>
      <div onClick={() => setActive(!active)} className={s.filter_label}>
        {label}
      </div>
      <select
        className={active ? s.filter_choice + " " + s.active : s.filter_choice}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled value="value1">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
